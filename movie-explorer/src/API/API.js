import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function API({
  type = "trending",
  genreId,
  language,
  includeAdult = false,
  query = "",
} = {}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let url = "";
        if (type === "trending") {
          url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
        } else if (type === "category") {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
          if (genreId) url += `&with_genres=${genreId}`;
          if (language) url += `&with_original_language=${language}`;
          url += `&sort_by=popularity.desc`;
          url += `&include_adult=${includeAdult}`;
        } else if (type === "tv") {
          url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
          if (genreId) url += `&with_genres=${genreId}`;
          if (language) url += `&with_original_language=${language}`;
          url += `&sort_by=popularity.desc`;
          url += `&include_adult=${includeAdult}`;
        } else if (type === "search") {
          if (!query) {
            setData([]);
            setLoading(false);
            return;
          }
          url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            query
          )}`;
        } else {
          setError("Invalid API parameters");
          setLoading(false);
          return;
        }

        const response = await fetch(url);
        const res = await response.json();
        if (res && res.results) {
          setData(res.results);
        } else {
          setError("No data found");
        }
      } catch (err) {
        setError("Failed to fetch");
        console.error("Fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [type, genreId, language, includeAdult, query]);

  return { data, error, loading };
}

export default API;
