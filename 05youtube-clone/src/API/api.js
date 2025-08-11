import React from "react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

async function api() {
  if (!API_KEY || !BASE_URL) {
    console.error("Missing API_KEY or BASE_URL in environment variables.");
    return;
  }

  const url = `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.items;
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export default api;
