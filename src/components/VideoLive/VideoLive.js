import classNames from 'classnames/bind';
import styles from './VideoLive.module.scss';
import {useRef, useState } from 'react';
import posterImgDefault from "~/assets/images/thumb-video-3.jpeg"
import videoDefault from "~/assets/video/Video3.mp4" 

// import icon
import { IoMdPause } from 'react-icons/io';
import { PlayIcon, ReloadIcon, ThreeBarsIcon, UserGroupActiveIcon, VolumeIcon, VolumeMutedIcon } from '~/components/Icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function VideoLive({src, isFollowing = false, posterImg , ...props}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(1);
    const [autoPlay, setAutoPlay] = useState(false);

    const videoRef = useRef(null);

    // console.log(videoRef?.current?.currentTime/videoRef?.current?.duration*100);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('waiting', () => setIsLoading(true));
            videoRef.current.addEventListener('canplaythrough', () => {
              setIsLoading(false);
            });
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('waiting', () => setIsLoading(true));
                videoRef.current.removeEventListener('canplaythrough', () => {
                    setIsLoading(false);
                });
            }
        };
    }, [setIsLoading])

    console.log("re-render");


    const handleAutoPlayButon = () => {
        setAutoPlay(!autoPlay)
    }

    const handlePlayButon = () => {
        const currentVideo = videoRef.current;

        if (isPlaying) {
            currentVideo.pause();
        } else {
            currentVideo.play();
        }

        setIsPlaying(prevState => !prevState)
    }

    const handleMuteVolume = () => {
        if (!isMuted) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = currentVolume;
        }
        setIsMuted(prev => !prev);
    }

    const handleVolumeChange = (e) => {
        const volumeBarHeight = e.currentTarget.offsetHeight;
        const clickedPosition = e.nativeEvent.offsetY;
        console.log(clickedPosition);
        const newVolume = 1 - clickedPosition / volumeBarHeight; // Invert the value because higher positions should result in lower volume
    
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        setIsMuted(false);
        setCurrentVolume(newVolume);
    };
    return (
            <div className={cx("video-wrapper") + " w-full h-full flex flex-wrap justify-center relative"}>
                <video 
                    className='rounded-lg h-full' 
                    ref={videoRef} 
                    preload='metadata'
                    muted={isMuted}
                    loop={true}
                    // autoPlay={true}
                    poster={posterImg || posterImgDefault}
                    {...props}
                >
                    <source src={src || videoDefault} type="video/mp4"/>
                </video>

                <div className='w-full h-full absolute top-0 left-0 flex flex-wrap flex-col justify-between items-center text-white '>
                    <div className='w-full h-full flex flex-wrap content-end cursor-pointer relative '>
                        <Link to='' className={cx("link-live-area") + ' w-full h-[70%] flex items-end absolute top-0 left-0'}>
                            <div className={cx("live-bar-title") + ' w-full flex items-center'}>
                                    <div className={cx("live-bar")}></div>
                                    <div className='flex items-center'>
                                        <ThreeBarsIcon className={cx("three-bars-icon") + " w-6 h-6 pb-[2px] mr-1 ms-[22px]"}/>
                                        <span className='h-[26px] leading-[26px] font-bold me-6'>Click to watch LIVE</span>
                                    </div>
                                    <div className={cx("live-bar")}></div>
                            </div>
                        </Link>
                        {isLoading ? <div className='text-white'>loading...</div> : null}
                        <div className={cx("live-info") + ' px-3 w-full translate-y-0 ease-linear duration-200'}>
                            <div className='text-[13px] w-fit font-semibold rounded-sm' 
                                style={{backgroundImage: "linear-gradient(131.17deg, rgb(255, 23, 100), rgb(237, 52, 149))", padding: "1px 5px 2px"}}
                            >LIVE</div>
                            <div className='flex my-1'>
                                <span className='text-lg text-bold me-2' style={{textShadow: "rgba(0, 0, 0, 0.12) 0px 1px 1px"}}>{`@${"bichngocxjnh2812"}`}</span>
                                <span className='flex items-center'><UserGroupActiveIcon width='20' height='20' /><span>310</span></span>
                            </div>
                            <div className='my-1 leading-[26px] text-sm'>Hello anh em, chào mừng các anh em đã đến với trực tiếp game</div>
                        </div>
                    </div>
                    <div className={cx("controller-bar") + ' w-full flex flex-wrap justify-center absolute bottom-0 left-0'}>
                        <div className='w-full flex justify-between items-center px-[6px]'>
                            <div className='flex items-center'>
                                <div className='text-white p-[10px] cursor-pointer text-center' onClick={handlePlayButon}>
                                    { isPlaying ? <IoMdPause style={{fontSize: "18px"}} /> : <PlayIcon width='18' height='18'  />}
                                </div>
                                <div className='text-white p-[10px] cursor-pointer text-center'>
                                    <ReloadIcon />
                                </div>
                            </div>
                            <div className='flex flex-row items-center'>
                                <div className='text-white bg-[#25252599] text-xs px-3 py-[5px] rounded-sm cursor-pointer mr-1' onClick={handleAutoPlayButon}>
                                    <span>Auto-play:</span><span className='text-[#ffffff80] ms-1'>{`${autoPlay ? "On" : "Off"}`}</span>
                                </div>
                                <div className={cx("volume-icon-container") + ' text-white p-[10px] cursor-pointer relative'} >
                                    <div onClick={handleMuteVolume}>{ isMuted === true ?  <VolumeMutedIcon width='16' height='16' /> : <VolumeIcon width='16' height='16' />}</div>
                                    <div className={cx("volume-bar-container") + ` hidden w-7 h-[100px] justify-center items-center absolute bottom-full right-1/2 translate-x-1/2 rounded-[32px] bg-[#121212] `}>
                                        <div className='w-1 h-20 bg-[#ffffff80] cursor-pointer relative' onClick={e => handleVolumeChange(e)}>
                                            <div 
                                                className='w-full bg-white absolute bottom-0' 
                                                style={{height: `${isMuted ? 0 : currentVolume*100}%`}}
                                                onClick={() => {return false}}
                                            >
                                                <div className='w-3 h-3 rounded-full bg-white absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default VideoLive;
