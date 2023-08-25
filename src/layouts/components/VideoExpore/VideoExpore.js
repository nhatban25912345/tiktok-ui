import classNames from 'classnames/bind';
import styles from './VideoExpore.module.scss';
import {useRef, useState } from 'react';
import posterImgDefault from "../../../assets/images/thumb-video.png"

// import icon
import { BsPlay } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function VideoExpore({src, posterImg, IsPlaying = false , ...props}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(IsPlaying);

    const videoRef = useRef(null);
    const videoWrapperRef = useRef(null);

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
    }, [isLoading])

    console.log("re-render");

    return (
        <div className={cx("video-wrapper") + " w-full relative"}  ref={videoWrapperRef}>
            <Link to='/'>
                <video 
                    className='rounded-lg w-full aspect-[3/4] object-cover' 
                    ref={videoRef} 
                    preload='metadata'
                    muted={true}
                    loop={true}
                    // autoPlay={true}
                    poster={posterImg || posterImgDefault}
                    {...props}
                >
                    <source src={src} type="video/mp4"/>
                </video>
                <div className=' w-full aspect-[3/4] absolute top-0 left-0 rounded-lg flex flex-col justify-end'>
                    <div className='p-3 pt-[67px] flex items-center'>
                        <BsPlay className='text-white text-[26px]'/>
                        <span className='ml-[3px] text-white'>{`${296.5}K`}</span>
                    </div>
                </div>
            </Link>
            <div className='w-full'>
                <Link to="/" className={cx("title")}>
                    <span className='mr-[2px]'>Kẻ tổn thương lại muốn tổn thương hà các bạn ơi</span>
                    <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#funny</span></Link>
                    <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#game</span></Link>
                    <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline'>#schanel</span></Link>
                </Link>
                <div className=' flex flex-row justify-between items-center mt-2'>
                    <Link to='/' className='flex flex-row items-center'>
                        <img className='w-6 h-6 rounded-full' src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46520be84f008a9d65325fa1784829ed.jpeg?x-expires=1693108800&x-signature=aZ7%2FZOROOuh98rl6GmYsNbbJsEI%3D' alt='avatar' />
                        <div className='mx-1 max-w-[150px] text-[#161823bf] overflow-hidden'>_kimtrung30_</div>
                    </Link>
                    <div className='flex flex-row items-center text-[#16182399] cursor-pointer'>
                        <FaRegHeart className='' />
                        <span className='ml-[3px]'>{`${96.5}K`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoExpore;
