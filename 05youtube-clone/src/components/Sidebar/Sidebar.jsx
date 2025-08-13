import { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiMovie2Line } from "react-icons/ri";
import { CiStreamOn } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import { RiBrushAiLine } from "react-icons/ri";
import { MdPodcasts } from "react-icons/md";
import ytIcon from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Sidebar() {
  const [showBtn, setShowBtn] = useState(true);
  const [SubsList, setSubsList] = useState([]);

  const sidebarCategories = [
    {
      id: 1,
      name: "Shopping",
      icon: <FiShoppingBag />,
    },
    {
      id: 2,
      name: "Music",
      icon: <CiMusicNote1 />,
    },
    {
      id: 3,
      name: "Movies",
      icon: <RiMovie2Line />,
    },
    {
      id: 4,
      name: "Live",
      icon: <CiStreamOn />,
    },
    {
      id: 5,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 6,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 7,
      name: "Sports",
      icon: <CiTrophy />,
    },
    {
      id: 8,
      name: "Cources",
      icon: <GiGraduateCap />,
    },
    {
      id: 9,
      name: "Fashion & Beauty",
      icon: <RiBrushAiLine />,
    },
    {
      id: 10,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  function toggleBtn() {
    setShowBtn((prev) => !prev);
  }

  useEffect(() => {
    async function getSubs() {
      try {
        const response = await fetch(
          `${BASE_URL}/subscriptions?part=snippet,subscriberSnippet&channelId=UCGqvJPRcv7aVFun-eTsatcA&maxResults=10&key=${API_KEY}`
        );
        const subsData = await response.json();
        setSubsList(subsData.items);
      } catch (err) {
        console.error("Error Fetching subscriptions list", err);
      }
    }
    getSubs();
  }, []);

  console.log(SubsList);

  return (
    <div className="flex flex-col gap-8 mt-4 hover:overflow-y-auto scroll-smooth">
      <div className="flex pl-5 sticky top-0 bg-black gap-2">
        <button
          className="hover:bg-neutral-500 p-2 rounded-3xl"
          onClick={toggleBtn}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <div className="flex items-center">
          <img src={ytIcon} alt="yt-icon" className="h-8 mr-1" />
          <h1 className="font-bold">ClipHub</h1>
        </div>
      </div>
      {showBtn ? (
        <>
          <div className="w-20 flex flex-col gap-5 ml-1">
            <div className="flex flex-col hover:bg-neutral-500 items-center p-2 rounded-lg">
              <Link
                to={"/"}
                className="text-[12px] w-full flex flex-col items-center"
              >
                <IoHomeOutline className="text-2xl" />
                Home
              </Link>
            </div>
            <div className="flex flex-col hover:bg-neutral-500 items-center p-2 rounded-lg">
              <Link
                to={"/shorts"}
                className="text-[12px] w-full flex flex-col items-center"
              >
                <SiYoutubeshorts className="text-2xl" />
                Shorts
              </Link>
            </div>
            <div className="flex flex-col hover:bg-neutral-500 items-center p-2 rounded-lg">
              <Link
                to={"/subscribers"}
                className="text-[12px] w-full flex flex-col items-center"
              >
                <MdSubscriptions className="text-2xl" />
                Subscriptions
              </Link>
            </div>
            <div className="flex flex-col hover:bg-neutral-500 items-center p-2 rounded-lg">
              <Link
                to={"/you"}
                className="text-[12px] w-full flex flex-col items-center"
              >
                <CgProfile className="text-2xl" />
                You
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-3 w-auto">
          <div className="flex items-center gap-3 mx-2 p-2 hover:bg-neutral-500 rounded-lg">
            <MdHome className="text-2xl" />
            <Link to={"/"} className="text-[16px] w-full">
              Home
            </Link>
          </div>
          <div className="flex items-center gap-3 mx-2 p-2 hover:bg-neutral-500 rounded-lg">
            <SiYoutubeshorts className="text-2xl" />
            <Link to={"/shorts"} className="text-[16px] w-full">
              Shorts
            </Link>
          </div>
          <div className="flex items-center gap-3 mx-2 p-2 hover:bg-neutral-500 rounded-lg">
            <MdSubscriptions className="text-2xl" />
            <Link to={"/subscribers"} className="text-[16px] w-full">
              Subscriptios
            </Link>
          </div>
          <hr className="mx-4" />
          <h2 className="ml-3 font-bold">Explore</h2>
          <div className="flex flex-col gap-3 mx-2 p-2 rounded-lg">
            {sidebarCategories.map((item) => (
              <NavLink
                key={item.id}
                to={`category/${item.name}`}
                className={({ isActive }) =>
                  `hover:bg-neutral-500 rounded-lg flex items-center gap-5 p-2 ${
                    isActive ? "bg-white text-black" : ""
                  }`
                }
              >
                <span className="text-[20px]">{item.icon}</span>
                <p>{item.name}</p>
              </NavLink>
            ))}
          </div>

          <hr className="mx-4" />
          <h2 className="ml-3 font-bold">Subscriptions</h2>
          {SubsList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 mx-2 p-2 hover:bg-neutral-500 rounded-lg"
            >
              <img
                src={item.snippet.thumbnails.default.url}
                alt="channelLogo"
                className="w-8 rounded-3xl"
              />
              <h2 className="text-[14px]">{item.snippet.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
