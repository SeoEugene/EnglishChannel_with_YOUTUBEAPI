import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { SiVisualbasic } from "react-icons/si";
import { GiClover } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";   //  Github아이콘
import { SiYoutubemusic } from "react-icons/si";    // Youtube Music아이콘

export const menuText = [
    {
        title: "Home",
        icon: <BiHomeHeart />,
        src: "/",
    },
    {
        title: "Today",
        icon: <AiOutlineCheck />,
        src: "/Today",
    },
    {
        title: "English Channel",
        icon: <AiFillYoutube />,
        src: "/Youtuber",
    },
    {
        title: "Basic",
        icon: <SiVisualbasic />,
        src: "/Search/Basic",
    },
    {
        title: "Animation",
        icon: <GiClover />,
        src: "/Search/Animation",
    },
    {
        title: "intermediate",
        icon: <FaFireAlt />,
        src: "/Search/intermediate",
    },
]

export const keywordText = [
    {
        title: "Yoora Jung",
        src: "/search/Yoora Jung"
    }, {
        title: "융나",
        src: "/search/융나YoongNa"
    }, {
        title: "Michelle Choi",
        src: "/search/Michelle Choi"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/",
        icon: <FiGithub />
    }, {
        title: "YouTubeMusic",
        src: "https://www.youtube.com/premium",
        icon: <SiYoutubemusic />
    }, {
        title: "Blog",
        src: "",
        icon: <FiGithub />
    }
]