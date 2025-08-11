import ytIcon from "../../assets/images/youtube.png";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { SearchContext } from "../../Context/SearchContext";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Navbar() {
  const { value, setValue, searchRes, setSearchRes } =
    useContext(SearchContext);
  const navigate = useNavigate();

  async function getResults(e) {
    e.preventDefault();

    if (!value.trim()) {
      alert("Search item is empty");
      return;
    }

    try {
      const res = await fetch(
        `${BASE_URL}/search?part=snippet&q=${encodeURIComponent(
          value
        )}&maxResults=20&key=${API_KEY}`
      );
      const data = await res.json();

      navigate("/results");
      console.log(data.items);
      setSearchRes(data.items);
    } catch (error) {
      console.log("Error fetching search result", error);
    }
  }

  return (
    <>
      <div className="container flex w-full item-center justify-between pl-2 py-3">
        <div className="logo flex items-center gap-4 ml-3">
          <div className="flex items-center">
            <img src={ytIcon} alt="yt-icon" className="h-8 mr-1" />
            <h1 className="font-bold">YouTube</h1>
            <span className="text-[10px] pb-5">IN</span>
          </div>
        </div>

        <form
          className="flex items-center flex-1 justify-center px-2"
          role="search"
          onSubmit={getResults}
        >
          <div className="search flex items-center border rounded-3xl px-4 h-10 gap-2 w-full max-w-[35rem] transition-all duration-300">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-none outline-none w-full text-sm sm:text-base"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button type="submit">
              <CiSearch className="text-xl sm:text-2xl cursor-pointer" />
            </button>
          </div>
          <button
            type="button"
            className="bg-gray-700 w-10 h-10 ml-2 flex items-center justify-center rounded-full text-white shrink-0"
          >
            <FaMicrophone className="text-xl" />
          </button>
        </form>
        <div className="flex items-center pr-5">
          <button>
            <CgProfile className="text-3xl" />
          </button>
        </div>
      </div>
      {/* {searchRes && <h1>hi</h1>} */}
    </>
  );
}

export default Navbar;
