import { IPlaylist, IReactions } from '@/types';
import image1 from '../assets/thumbnails/image1.png';
import image2 from '../assets/thumbnails/image2.png';
import image3 from '../assets/thumbnails/image3.png';
import image4 from '../assets/thumbnails/image4.png';
import image5 from '../assets/thumbnails/image5.png';
import image6 from '../assets/thumbnails/image6.png';
import image7 from '../assets/thumbnails/image7.png';
import image8 from '../assets/thumbnails/image8.png';
import { BiDislike, BiLike } from 'react-icons/bi';
import { PiListPlus, PiShareFat } from 'react-icons/pi';

export const PLAYLIST: IPlaylist[] = [
    {
        id: 1,
        creatorName: "James Gouse",
        thumbnail: image1,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 2,
        creatorName: "Alan Cooper",
        thumbnail: image2,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 3,
        creatorName: "Marcus Levin",
        thumbnail: image3,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 4,
        creatorName: "Alexis Sears",
        thumbnail: image4,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 5,
        creatorName: "Jesica Lambert",
        thumbnail: image5,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 6,
        creatorName: "Anna White",
        thumbnail: image6,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 7,
        creatorName: "Skylar Dias",
        thumbnail: image7,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 8,
        creatorName: "Skylar Dias",
        thumbnail: image8,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 9,
        creatorName: "Skylar Dias",
        thumbnail: image1,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 10,
        creatorName: "Skylar Dias",
        thumbnail: image2,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 11,
        creatorName: "Skylar Dias",
        thumbnail: image3,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 12,
        creatorName: "Skylar Dias",
        thumbnail: image4,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
    {
        id: 13,
        creatorName: "Skylar Dias",
        thumbnail: image5,
        title: "Ep 6: Living to Serve | SEARCH ON",
        viewCount: "1M Views",
        timeline: "1 weeks ago",
        duration: "23:45"
    },
]


export const REACTIONS: IReactions[] = [
    {
        id: 1,
        icon: BiLike,
        name: "1.7K",
    },
    {
        id: 2,
        icon: BiDislike,
        name: "632",
    },
    {
        id: 3,
        icon: PiShareFat,
        name: "Share",
    },
    {
        id: 4,
        icon: PiListPlus,
        name: "Save",
    },]