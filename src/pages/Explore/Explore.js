import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import VideoExpore from '~/components/VideoExpore';
import video from "../../assets/video/Video2.mp4"
import posterImg from "../../assets/images/thumb-video.png";
import TagBar from './TagBar/TagBar';
import { useState } from 'react';


const cx = classNames.bind(styles);

function Explore() {

    const [isPlaying, setIsPlaying] = useState(0)
    
    const handlePlayVideo = (key) => {
        setIsPlaying(key);
    }

    const videoApi = [
        {src: "", posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
    ]

    return ( 
        <div className={cx("wrapper")}>
            <TagBar />
            <div className='w-full grid tablet:grid-cols-2 desktop:grid-cols-3 desktop-1:grid-cols-4 desktop-2:grid-cols-5 gap-y-6 gap-x-4' style={{padding: "4px 48px 32px"}}>
                {videoApi.map((video, key) => 
                    <VideoExpore className="col-span-1" key={key} src={video.src} posterImg={video.posterImg} IsPlaying={isPlaying === key ? true : false}  onMouseEnter={() => handlePlayVideo(key)}/>) 
                }
            </div>
        </div>
    );
}

export default Explore;