import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';
import { Link } from 'react-router-dom';
import {useRef, useState } from 'react';
import { convertToMinuteSeconds } from "../../../utils/formatters"
import posterImg from "../../../assets/images/thumb-video.png"

// import icon
import { BsFillCheckCircleFill, BsFillHeartFill, BsFillBookmarkFill } from 'react-icons/bs';
import { PiMusicNotesSimpleFill } from 'react-icons/pi';
import { BiSolidShare } from 'react-icons/bi';
import { FaCommentDots } from 'react-icons/fa';
// import { FiVolume2 } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdPause } from 'react-icons/io';
import { PlayIcon, VolumeIcon, VolumeMutedIcon } from '~/components/Icons';
import { useEffect } from 'react';
import Processbar from './components/Processbar';


const cx = classNames.bind(styles);

function VideoCard({src, ...props}) {

    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [videoDuration, setVideoDuration] = useState("00:00");
    const [currentTime, setCurrentTime] = useState("00:00");

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
        setIsMuted(prev => !prev);
    }

    const handleProgressBarClick = (e) => {
        if (!videoRef.current) {
            return; // Return early if videoRef.current is not defined
        }
        const progressBar = e.currentTarget;
        const clickedPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
        const percentageClicked = (clickedPosition / progressBarWidth) * 100;
        
        const newCurrentTime = (videoRef.current.duration * percentageClicked) / 100;
        videoRef.current.currentTime = newCurrentTime;
        setCurrentTime(convertToMinuteSeconds(newCurrentTime));
    }

    const handleIsFolowing = () => {
        setIsFollowing(prev => !prev);
    }

    return (
        <div className={cx("wrapper") + " relative w-[692px] py-5 flex flex-row"}>
            <img
                className="w-[56px] h-[56px] rounded-full object-cover "
                src={posterImg}
                // src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e1b71e2e1f6a212401611d208b82524e~c5_100x100.jpeg?x-expires=1692493200&x-signature=MbDigy5JnZSy8p%2FXyoGRm%2F%2BpAGc%3D"
                alt="avatar"
            ></img>
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
                    { isFollowing ? <Link className="btn-line-border absolute top-2 right-0 text-[#161823] border-[#1618231f] bg-[#f5f5f5] hover:bg-[#f5f5f5]" onClick={handleIsFolowing}><div>Following</div></Link>
                    : <Link className="btn-line-border absolute top-2 right-0" onClick={handleIsFolowing}><div>Follow</div></Link>}
                    <div className="">Nay gặp trường hợp bất ngờ quá cũng may có cái tai nghe trừ 
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#huyquanhoa</span></Link>
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline'>#funny</span></Link>
                    </div>
                    <Link className="text-sm flex items-center text-[#161823] hover:underline">
                        <PiMusicNotesSimpleFill />
                        <span className='ml-1'>nhạc nền - Huy Quần Hoa</span>
                    </Link>
                </div>
                <div className="w-full flex items-end justify-start" ref={videoWrapperRef}>
                    <div className={cx("video-wrapper") + " mr-5 rounded-lg relative"}>
                        <video 
                            className='rounded-lg h-full' 
                            ref={videoRef} 
                            preload='metadata'
                            muted={isMuted}
                            loop={true}
                            // autoPlay={true}
                            poster={posterImg}
                            {...props}
                        >
                            <source src={src} type="video/mp4"/>
                        </video>

                        <div className={cx("overlay") + ' w-full h-full absolute top-0 left-0 flex flex-wrap flex-col justify-between items-center'}>
                            <div className='w-[92%] mt-4 text-white flex justify-end cursor-pointer'><BsThreeDots style={{fontSize: "26px"}} /></div>
                            {isLoading ? <div className='text-white'>loading...</div> : null}
                            <div className='w-[92%] flex flex-wrap justify-center'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-white p-[10px] cursor-pointer text-center' onClick={handlePlayButon}>
                                        { isPlaying ? <IoMdPause style={{fontSize: "20px", marginLeft: "-2px"}} /> : <PlayIcon />}
                                    </div>
                                    <div className='text-white p-2 cursor-pointer' onClick={handleMuteVolume}>
                                        { isMuted === true ?  <VolumeMutedIcon /> : <VolumeIcon />}
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
                    <div className="flex flex-col">
                        <Link className="w-12 flex-col">
                            <div className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]"><BsFillHeartFill /></div>
                            <div className="w-full text-sm font-bold text-[#161823bf]">451.4K</div>
                        </Link>
                        <Link className="w-12 flex-col">
                            <div className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]"><FaCommentDots /></div>
                            <div className="w-full text-sm font-bold text-[#161823bf]">15.2K</div>
                        </Link>
                        <Link className="w-12 flex-col">
                            <div className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]"><BsFillBookmarkFill /></div>
                            <div className="w-full text-sm font-bold text-[#161823bf]">18.4K</div>
                        </Link>
                        <Link className="w-12 flex-col">
                            <div className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[26px]"><BiSolidShare style={{transform: "rotateY( 180deg)"}}/></div>
                            <div className="w-full text-sm font-bold text-[#161823bf]">485.2K</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
