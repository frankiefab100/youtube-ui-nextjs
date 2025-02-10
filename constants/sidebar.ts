import { ExtraProps, MoreYoutubeProps, SidebarProps, SubProps } from "@/types/types";
import { BiHome, BiLike, BiMessageError } from "react-icons/bi";
import { FaCompass, FaYoutube } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { HiSignal } from "react-icons/hi2";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlinedFlag, MdOutlineHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { RiArrowDownSLine, RiVideoLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";

export const SIDENAV_LIST: SidebarProps[] = [
    {
        id: 1,
        icon: BiHome,
        name: "Home",
    },
    {
        id: 2,
        icon: FaCompass,
        name: "Explore",
    },
    {
        id: 3,
        icon: MdOutlineSubscriptions,
        name: "Subscriptions",
    },
    {
        id: 4,
        icon: MdOutlineVideoLibrary,
        name: "Library",
    },
    {
        id: 5,
        icon: MdOutlineHistory,
        name: "History",
    },
    {
        id: 6,
        icon: RiVideoLine,
        name: "Your Videos",
    },
    {
        id: 7,
        icon: BiLike,
        name: "Liked",
    },
    {
        id: 8,
        icon: MdOutlineWatchLater,
        name: "Watch Later",
    },
    {
        id: 9,
        icon: RiArrowDownSLine,
        name: "Show More",
    },
];


export const SUBSCRIPTIONS_LIST: SubProps[] = [
    {
        id: 1,
        image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
        name: "James Gouse",
    },
    {
        id: 2,
        image: "https://mighty.tools/mockmind-api/content/human/128.jpg",
        name: "Alan Cooper",
    },
    {
        id: 3,
        image: "https://mighty.tools/mockmind-api/content/human/112.jpg",
        name: "Marcus Levin",
    },
    {
        id: 4,
        image: "https://mighty.tools/mockmind-api/content/human/102.jpg",
        name: "Alexis Sears",
    },
    {
        id: 5,
        image: "https://mighty.tools/mockmind-api/content/human/113.jpg",
        name: "Jesica Lambert",
    },
    {
        id: 6,
        image: "https://mighty.tools/mockmind-api/content/human/95.jpg",
        name: "Anna White",
    },
    {
        id: 7,
        image: "https://mighty.tools/mockmind-api/content/human/106.jpg",
        name: "Skylar Dias",
    },
]

export const MORE_YOUTUBE: MoreYoutubeProps[] = [
    {
        id: 1,
        icon: FaYoutube,
        name: "YouTube Premium",
    },
    {
        id: 2,
        icon: SiYoutubegaming,
        name: "Gaming",
    },
    {
        id: 3,
        icon: HiSignal,
        name: "Live",
    },
]


export const EXTRA_LINKS: ExtraProps[] = [
    {
        id: 1,
        icon: FiSettings,
        name: "Settings",
    },
    {
        id: 2,
        icon: MdOutlinedFlag,
        name: "Report history",
    },
    {
        id: 3,
        icon: IoHelpCircleOutline,
        name: "Help",
    },
    {
        id: 4,
        icon: BiMessageError,
        name: "Send feedback",
    },
]

export const FOOTER_LINKS: string[] = [
    "About", "Press", "Copyright",
    "Contact us", "Creators",
    "Advertise Developers",
    "Terms", "Privacy Policy & Safety",
    "How YouTube works",
    "Test new features",
    "NFL Sunday Ticket"
]