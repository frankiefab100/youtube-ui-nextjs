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
}

export type IMoreYoutube = ISidebar

export type IExtraLink = ISidebar

export interface VideoProps {
    id: number;
    creatorImg: string;
    creatorName: string;
    thumbnail: StaticImageData;
    title: string;
    viewCount: string;
    timeline: string;
}