import { IExtraLink, IMoreYoutube, ISidebar, ISubscription } from "@/types/index";
import { BiHome, BiLike, BiMessageError } from "react-icons/bi";
import { FaCompass, FaYoutube } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { HiSignal } from "react-icons/hi2";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlinedFlag, MdOutlineHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { RiArrowDownSLine, RiVideoLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";

export const SIDEBAR_NAV: ISidebar[] = [
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


export const SUBSCRIPTIONS_LIST: ISubscription[] = [
    {
        id: 1,
        image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
        name: "James Gouse",
        link: "/",
    },
    {
        id: 2,
        image: "https://mighty.tools/mockmind-api/content/human/128.jpg",
        name: "Alan Cooper",
        link: "/",
    },
    {
        id: 3,
        image: "https://mighty.tools/mockmind-api/content/human/112.jpg",
        name: "Marcus Levin",
        link: "/channel",
    },
    {
        id: 4,
        image: "https://mighty.tools/mockmind-api/content/human/102.jpg",
        name: "Alexis Sears",
        link: "/",
    },
    {
        id: 5,
        image: "https://mighty.tools/mockmind-api/content/human/113.jpg",
        name: "Jesica Lambert",
        link: "/",
    },
    {
        id: 6,
        image: "https://mighty.tools/mockmind-api/content/human/95.jpg",
        name: "Anna White",
        link: "/",
    },
    {
        id: 7,
        image: "https://mighty.tools/mockmind-api/content/human/106.jpg",
        name: "Skylar Dias",
        link: "/",
    },
]

export const MORE_YOUTUBE: IMoreYoutube[] = [
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
    {
        id: 4,
        icon: GoTrophy,
        name: "Sports",
    },
]


export const EXTRA_LINKS: IExtraLink[] = [
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
]