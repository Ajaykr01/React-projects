import { useContext, useEffect, useState } from "react";
import channelLogo from "../../assets/images/yt-logo.png";
import { SearchContext } from "../../Context/SearchContext";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function SearchedVideos() {
  const { value } = useContext(SearchContext);
  const [queryRes, setQueryRes] = useState([]);

  useEffect(() => {
    async function getData() {
      if (!value) return;

      try {
        const url = `${BASE_URL}/search?part=snippet&q=${value}&regionCode=IN&maxResults=20&key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Response status`, res.status);
        }
        const data = await res.json();

        const videoId = data.items.map((item) => item.id.videoId).join(",");

        if (!videoId) {
          setQueryRes([]);
          return;
        }

        const viewCount = await fetch(
          `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        const viewsData = await viewCount.json();

        setQueryRes(viewsData.items || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }

    getData();
  }, [value]);

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    if (seconds < 60) return "Just now";

    for (const [unit, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count >= 1) {
        return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
      }
    }
  }

  function formatViews(views) {
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M views";
    if (views >= 1_000) return (views / 1_000).toFixed(1) + "K views";
    return views + " views";
  }

  function truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="container flex flex-col gap-5">
      {queryRes.map((item) => (
        <div key={item.id.channelId} className="flex gap-3">
          <div className="video w-[35rem] h-72 bg-amber-200 rounded-lg">
            <img
              src={item.snippet.thumbnails?.high?.url}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <div>
              <h1 className="text-xl">{item.snippet.title}</h1>
              <span className="text-sm text-gray-400">
                {formatViews(item.statistics?.viewCount)} •{" "}
              </span>
              <span className="text-sm text-gray-400">
                {timeAgo(item.snippet.publishedAt)}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img
                  src={channelLogo}
                  alt="profileImg"
                  className="h-10 rounded-3xl"
                />
                <h1 className="text-sm text-gray-400">
                  {item.snippet.channelTitle}
                </h1>
              </div>
              <div>
                <p>{truncateText(item.snippet.description, 200)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchedVideos;
