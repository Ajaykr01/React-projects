import { useEffect, useState, version } from "react";
import api from "../../API/api";
import channelLogo from "../../assets/images/yt-logo.png";

function Card() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      const data = await api();
      setVideos(data);
    }
    getVideos();
  }, []);

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
  console.log(videos);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {videos.map((item) => (
        <div key={item.id}>
          <div className="w-full">
            <img
              src={item.snippet.thumbnails?.high?.url}
              alt="thumbnail"
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            <img
              src={channelLogo}
              alt="profileImg"
              className="h-10 rounded-3xl"
            />
            <h1>{item.snippet.title}</h1>
          </div>
          <div className="ml-12 text-sm text-gray-400">
            <p>{item.snippet.channelTitle}</p>
            <span>{formatViews(Number(item.statistics.viewCount))} • </span>
            <span>{timeAgo(item.snippet.publishedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
