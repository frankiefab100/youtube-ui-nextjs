import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ISidebar {
    id: number;
    icon: IconType;
    name: string;
}

export interface ISubscription {
    id: number;
    image: string;
    name: string;
    link?: string;
}

export type IMoreYoutube = ISidebar

export type IExtraLink = ISidebar

export interface IPlaylist {
    id: number;
    creatorName: string;
    thumbnail: StaticImageData;
    title: string;
    viewCount: string;
    timeline: string;
    duration: string;
}
export interface VideoProps extends IPlaylist {
    creatorImg: string;
}

export type IReactions = ISidebar