import classNames from 'classnames/bind';
import styles from '../Explore.module.scss';

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation  } from 'swiper/modules';
import axios from 'axios';

const cx = classNames.bind(styles);

function TagBar() {

    const [isActive, setIsActive] = useState(0)
    const [tags, setTags] = useState([{}])

    const [navbarStatus, setNavbarStatus] = useState(true);

    const handleNavbar = () => {
        if ( window.scrollY >= 70 ) {
            setNavbarStatus(false)
        } else {
            setNavbarStatus(true)
        }
    }

    const handleMouseUp = () => {
        setNavbarStatus(true); 
        console.log(11111);
    }

    useEffect(() => {
        const getTags = async () => {
            const result = await axios.get("https://nhatban25912345.github.io/api-tiktok/explore-tags.json");
            setTags(result.data);
        }
        getTags();
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleNavbar);
        window.addEventListener("mouseup", handleMouseUp);
        return () => { 
            window.removeEventListener("scroll", handleNavbar);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    },  [])

    const handleActive = (key) => {
        setIsActive(key)
    }

    return ( 
        <div className={navbarStatus ? cx("tag-wrapper") : "hidden"}>
            <Swiper 
                slidesPerView={'auto'}
                spaceBetween={12}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full !pt-7 !pb-4 bg-white"
            >
                {
                    tags.map((tag, key) => 
                        <SwiperSlide key={key}  className='!w-fit'>
                            <button className={cx("tag")  + ` ${key === isActive ? "text-white bg-[#1b1b1b]" : ""}`} onClick={() => handleActive(key)}>{tag.title}</button>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}

export default TagBar;