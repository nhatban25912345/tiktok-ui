import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';
import { Link } from 'react-router-dom';
import {useRef, useState } from 'react';
import { convertToMinuteSeconds } from "~/utils/formatters"
import posterImgDefault from "~/assets/images/thumb-video.png"

// import icon
import { BsFillCheckCircleFill, BsFillHeartFill, BsFillBookmarkFill } from 'react-icons/bs';
import { PiMusicNotesSimpleFill } from 'react-icons/pi';
import { BiSolidShare } from 'react-icons/bi';
import { FaCommentDots } from 'react-icons/fa';
import { PiHeartBreak, PiFlagBold } from 'react-icons/pi';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import { PlayIcon, VolumeIconLight, VolumeMutedIcon } from '~/components/Icons';
import { useEffect } from 'react';
import Processbar from './components/Processbar';
import ToolTipShareWrapper from '../ToolTipShareWrapper/ToolTipShareWrapper';
import ActionBar from '~/components/VideoCard/components/ActionBar';


const cx = classNames.bind(styles);

function VideoCard({src, isFollowing = false, posterImg , ...props}) {

    const [isFollowingState, setIsFollowingState] = useState(isFollowing);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [videoDuration, setVideoDuration] = useState("00:00");
    const [currentTime, setCurrentTime] = useState("00:00");
    const [currentVolume, setCurrentVolume] = useState(1);

    const videoRef = useRef(null);
    const videoWrapperRef = useRef(null);

    // console.log(videoRef?.current?.currentTime/videoRef?.current?.duration*100);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleCurrentTime);
            videoRef.current.addEventListener('waiting', () => setIsLoading(true));
            videoRef.current.addEventListener('canplaythrough', () => {
              setVideoDuration(convertToMinuteSeconds(videoRef.current.duration));
              setIsLoading(false);
            });
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('waiting', () => setIsLoading(true));
                videoRef.current.removeEventListener('canplaythrough', () => {
                setVideoDuration(convertToMinuteSeconds(videoRef.current.duration));
                setIsLoading(false);
                });
            }
        };
    }, [setIsLoading, setVideoDuration])

    console.log("re-render");


    const handlePlayButon = () => {
        const currentVideo = videoRef.current;

        if (isPlaying) {
            currentVideo.pause();
        } else {
            currentVideo.play();
        }

        setIsPlaying(prevState => !prevState)
    }

    const handleCurrentTime = () => {
        setCurrentTime(() => convertToMinuteSeconds(videoRef.current.currentTime));
    }

    const handleMuteVolume = () => {
        if (!isMuted) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = currentVolume;
        }
        setIsMuted(prev => !prev);
    }

    const handleProgressBarClick = (e) => {
        if (!videoRef.current) {
            return; // Return early if videoRef.current is not defined
        }
        const progressBar = e.currentTarget;
        const clickedPosition = e.nativeEvent.offsetX;
        // console.log("clickedPosition: ", clickedPosition);
        const progressBarWidth = progressBar.offsetWidth;
        const percentageClicked = (clickedPosition / progressBarWidth) * 100;
        
        const newCurrentTime = (videoRef.current.duration * percentageClicked) / 100;
        videoRef.current.currentTime = newCurrentTime;
        setCurrentTime(convertToMinuteSeconds(newCurrentTime));
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

    const handleIsFolowing = () => {
        setIsFollowingState(prev => !prev);
    }

    return (
        <div className={cx("wrapper") + " relative w-[692px] py-5 flex flex-row"}>
            <img
                className="w-[56px] h-[56px] rounded-full object-cover "
                src={posterImg || posterImgDefault}
                alt="avatar"
            />
            <div className="w-[636px] flex flex-wrap ml-3 relative">
                <div className="w-full flex-col mr-[114px]">
                    <Link className="text-lg/[24px] inline-flex flex-row items-center">
                        <div className="flex flex-row items-center font-bold ">
                            <span className="mt-[2px]">duyyy.real.channel</span>
                            <BsFillCheckCircleFill
                                style={{ color: 'rgb(32, 213, 236)', width: '14px', height: '14px', marginLeft: '4px' }}
                            />
                        </div>
                        <span className="text-sm ml-[6px] text-[#161823]">Huy Quần Hoa</span>
                    </Link>
                    {!isFollowing && (
                    isFollowingState ? (
                        <Link className="btn-line-border-black absolute top-2 right-0" onClick={handleIsFolowing}>
                            Following
                        </Link>
                    ) : (
                        <Link className="btn-line-border-primary absolute top-2 right-0" onClick={handleIsFolowing}>
                            Follow
                        </Link>
                    )
                    )}
                    <div className={cx("title")}>
                        <span>Nay gặp trường hợp bất ngờ quá cũng may có cái tai nghe trừ </span>
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#huyquanhoa</span></Link>
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#funny</span></Link>
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline'>#photoshop</span></Link>
                    </div>
                    <Link className="mb-3 text-sm flex items-center text-[#161823] hover:underline">
                        <PiMusicNotesSimpleFill />
                        <span className='ml-1'>nhạc nền - Huy Quần Hoa</span>
                    </Link>
                </div>
                <div className="w-full flex items-end justify-start" ref={videoWrapperRef}>
                    <div className={cx("video-wrapper") + " mr-5 rounded-lg relative"}>
                        <video 
                            className='rounded-lg h-full object-cover' 
                            ref={videoRef} 
                            preload='metadata'
                            muted={isMuted}
                            loop={true}
                            // autoPlay={true}
                            poster={posterImg || posterImgDefault}
                            {...props}
                        >
                            <source src={src} type="video/mp4"/>
                        </video>

                        <div className={cx("overlay") + ' w-full h-full absolute top-0 left-0 flex-wrap flex-col justify-between items-center'}>
                            <div className='w-[92%] mt-4 text-white flex justify-end cursor-pointer'>
                                <BsThreeDots className={cx("three-dots-btn")} style={{fontSize: "26px"}} />
                                <div 
                                    className={cx("ui-popup-container") + ' w-[200px] py-2 absolute -right-5 translate-x-full top-0 text-black rounded-lg'} 
                                    style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px"}}
                                >
                                    <div className='flex items-center px-4 py-2 font-semibold hover:bg-[#16182308]' >
                                        <PiHeartBreak className='text-2xl w-6'/>
                                        <div className='ms-2 text-[15px]'>Not interested</div>
                                    </div>
                                    <div className='flex items-center px-4 py-2 font-semibold hover:bg-[#16182308]' >
                                        <PiFlagBold className='text-2xl w-6'/>
                                        <div className='ms-2 text-[15px]'>Report</div>
                                    </div>
                                </div>
                            </div>
                            {isLoading ? <div className='text-white'>loading...</div> : null}
                            <div className='w-[92%] flex flex-wrap justify-center'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-white p-[10px] cursor-pointer text-center' onClick={handlePlayButon}>
                                        { isPlaying ? <IoMdPause style={{fontSize: "20px", marginLeft: "-2px"}} /> : <PlayIcon />}
                                    </div>
                                    <div className={cx("volume-icon-container") + ' text-white p-2 cursor-pointer relative'} >
                                        <div onClick={handleMuteVolume}>{ isMuted === true ?  <VolumeMutedIcon /> : <VolumeIconLight />}</div>
                                        <div className={cx("volume-bar-container") + ` hidden w-6 h-16 justify-center items-center absolute bottom-full right-1/2 translate-x-1/2 rounded-[32px] bg-[#16182357] `}>
                                            <div className='w-[2px] h-12 bg-[#ffffff57] cursor-pointer relative' onClick={e => handleVolumeChange(e)}>
                                                <div 
                                                    className='w-[2px] bg-white absolute bottom-0' 
                                                    style={{height: `${isMuted ? 0 : currentVolume*100}%`}}
                                                    onClick={() => {return false}}
                                                >
                                                    <div className='w-3 h-3 rounded-full bg-white absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("progress-wrapper") + ' w-full h-4 mb-3 flex items-center py-1'}>
                                    <div className={cx("progress-bar-full") + ' w-[75%] h-[2px] bg-[#ffffff57] relative cursor-pointer'} onClick={(e) => handleProgressBarClick(e)}>
                                        <Processbar currentTime={currentTime} duration={videoDuration} video={videoRef.current} />
                                    </div>
                                    <div className='w-[25%] text-white text-[10px] text-right'>{`${currentTime}/${videoDuration}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActionBar />
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
