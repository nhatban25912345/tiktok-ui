import classNames from 'classnames/bind';
import styles from './VideoLive.module.scss';

import { Link } from 'react-router-dom';
import {useRef, useState } from 'react';
import { convertToMinuteSeconds } from "../../../utils/formatters"
import posterImg from "../../../assets/images/thumb-video.png"

// import icon
import { BsThreeDots } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import { PlayIcon, VolumeIconLight, VolumeMutedIcon } from '~/components/Icons';
import Processbar from './Processbar';

const cx = classNames.bind(styles);

function Overlay({isLoading, isPlaying, isMuted, currentTime, videoDuration, video, handlePlayButon, handleMuteVolume }) {

    const handleProgressBarClick = (e) => {
        if (!video) {
            return; // Return early if videoRef.current is not defined
        }
        const progressBar = e.currentTarget;
        const clickedPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
        const percentageClicked = (clickedPosition / progressBarWidth) * 100;
        
        const newCurrentTime = (video.duration * percentageClicked) / 100;
        video.currentTime = newCurrentTime;
        // setCurrentTime(convertToMinuteSeconds(newCurrentTime));
    }

    return (  
        <div className={cx("overlay") + ' w-full h-full absolute top-0 left-0 flex flex-wrap flex-col justify-between items-center'}>
            <div className='w-[92%] mt-4 text-white flex justify-end cursor-pointer'><BsThreeDots style={{fontSize: "26px"}} /></div>
            {isLoading ? <div className='text-white'>loading...</div> : null}
            <div className='w-[92%] flex flex-wrap justify-center'>
                <div className='w-full flex justify-between items-center'>
                    <div className='text-white p-[10px] cursor-pointer text-center' onClick={handlePlayButon}>
                        { isPlaying ? <IoMdPause style={{fontSize: "20px", marginLeft: "-2px"}} /> : <PlayIcon />}
                    </div>
                    <div className='text-white p-2 cursor-pointer' onClick={handleMuteVolume}>
                        { isMuted === true ?  <VolumeMutedIcon /> : <VolumeIconLight />}
                    </div>
                </div>
                <div className={cx("progress-wrapper") + ' w-full h-4 mb-3 flex items-center py-1'}>
                    <div className={cx("progress-bar-full") + ' w-[75%] h-[2px] bg-[#ffffff57] relative cursor-pointer'} onClick={(e) => handleProgressBarClick(e)}>
                        <Processbar currentTime={currentTime} duration={videoDuration} video={video} />
                    </div>
                    <div className='w-[25%] text-white text-[10px] text-right'>{`${currentTime}/${videoDuration}`}</div>
                </div>
            </div>
        </div>
    );
}

export default Overlay;
