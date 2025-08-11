import ytIcon from "../../assets/images/youtube.png";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
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
        >
          <div className="search flex items-center border rounded-3xl px-4 h-10 gap-2 w-full max-w-[35rem] transition-all duration-300">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-none outline-none w-full text-sm sm:text-base"
            />
            <button type="submit">
              <CiSearch className="text-xl sm:text-2xl" />
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
    </>
  );
}

export default Navbar;
