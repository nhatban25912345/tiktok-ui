import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import VideoLive from '~/components/VideoLive/VideoLive';
import video from "../../assets/video/Video3.mp4"
import postImg from "../../assets/images/thumb-video-3.jpeg"

import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Mousewheel } from 'swiper/modules';

import {HiChevronUp, HiChevronDown} from "react-icons/hi"
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Live() {

    const [swiper, setSwiper] = useState(null); // Use state to hold the swiper instance
    const [currentSlide, setCurrentSlide] = useState(0);

    console.log(swiper);
    
    const handleCurrentSlide = () => { 
        if (swiper) {
            setCurrentSlide(swiper.activeIndex);
        }
    }

    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', handleCurrentSlide); // Attach event listener when swiper is available
        }
        return () => {
            if (swiper) {
                swiper.off('slideChange', handleCurrentSlide); // Detach event listener on component unmount
            }
        };
    }, [swiper]); // Run effect whenever swiper changes


    return ( 
        <div className={cx("wrapper")}>
            <Swiper 
                direction={'vertical'}
                slidesPerView={1.1}
                spaceBetween={30}
                mousewheel={true}
                modules={[Mousewheel]} 
                className={"mySwiper " + cx("inner")}
                onSwiper={(swiper) => setSwiper(swiper)} // Set the swiper instance
            >
                <SwiperSlide className={cx("slide")}><VideoLive /></SwiperSlide>
                <SwiperSlide className={cx("slide")}><VideoLive src={video} posterImg={postImg} /></SwiperSlide>
                <SwiperSlide className={cx("slide")}><VideoLive src={video} posterImg={postImg} /></SwiperSlide>
                <SwiperSlide className={cx("slide")}><VideoLive src={video} posterImg={postImg} /></SwiperSlide>
                <SwiperSlide className={cx("slide")}><VideoLive src={video} posterImg={postImg} /></SwiperSlide>
                <SwiperNavButtons swiper={swiper} currentSlide={currentSlide} />
            </Swiper>
        </div>
    );
}

function SwiperNavButtons({swiper, currentSlide}) {
    return (  
        <div className={cx("swiper-nav-btns") + " absolute top-1/2 -translate-y-1/2 right-12 z-10 flex flex-col w-9 h-20"} slot='container-start'>
            <button className={ currentSlide === 0 ? cx("disable-btn") : ""} onClick={() => swiper.slidePrev()}><HiChevronUp /></button>
            <button className={ currentSlide === swiper?.slides.length - 1 ? cx("disable-btn") : ""} onClick={() => swiper.slideNext()}><HiChevronDown /></button>
        </div>
    );
}

export default Live;