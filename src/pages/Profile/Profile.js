import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill, BsThreeDots } from 'react-icons/bs';
import { PiFlagBold, PiShareFatBold } from 'react-icons/pi';
import { LuBan } from 'react-icons/lu';
import { UserCheckIcon } from '~/components/Icons';
import avatarDefault from '~/assets/images/avatar1.jpeg';
import PlaylistImg from '~/assets/images/thumb-video-1.jpeg';
import video from "../../assets/video/Video3.mp4"
import posterImg from "../../assets/images/thumb-video.png";

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ToolTipShareWrapper from '~/components/ToolTipShareWrapper/ToolTipShareWrapper';
import { useState } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import VideoExpore from '~/components/VideoExpore';
const cx = classNames.bind(styles);

function Profile() {
    const [tagStatus, setTagStatus] = useState(0);

    const handleClickTagStatus = (key) => {
        setTagStatus(key);
    };
    console.log('tagStatus: ', tagStatus);

    const tags = [
        {
            title: 'Videos',
            lock: false,
            display: true,
        },
        {
            title: 'Liked',
            lock: true,
            display: true,
        },
        {
            title: 'Favorites',
            lock: true,
            display: false,
        },
    ];

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
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
        {src: video, posterImg:posterImg},
    ]

    return (
        <div className={cx('wrapper') + ' relative'}>
            <div className="relative flex flex-col mb-5 max-w-[624px] pr-[92px]">
                <div className="flex flex-row">
                    <img src={avatarDefault} alt="avatar" className="w-[116px] h-[116px] mr-5 rounded-full " />
                    <div className="flex flex-col content-start">
                        <Link className="text-[32px]/[38px] mb-1 inline-flex flex-row items-center font-bold">
                            <span className="">dangthuhaf</span>
                            <BsFillCheckCircleFill
                                style={{ color: 'rgb(32, 213, 236)', width: '20', height: '20', marginLeft: '8px' }}
                            />
                        </Link>
                        <div className="text-lg/6 h-[25px] font-semibold">Đặng Thu Hà</div>
                        <div className="mt-4 flex min-w-[208px] h-9">
                            <div className="w-full btn-follow-fullfill hidden rounded-[4px]">Following</div>
                            <div className="flex items-center">
                                <Link className="btn-line-border-primary min-w-[164px] min-h-[36px] mr-2 rounded-[4px]">
                                    Messagers
                                </Link>
                                <Tippy
                                    content="Unfollow"
                                    placement="bottom"
                                    className="p-1 opacity-80 font-semibold rounded-lg"
                                    duration={100}
                                >
                                    <div className="p-[6px] cursor-pointer border rounded-sm border-[#1618231f]">
                                        <UserCheckIcon className="" />
                                    </div>
                                </Tippy>
                            </div>
                            <div className="w-full btn-line-border-black text-lg rounded-[4px] border-[#1618231f] hover:border-#d0d1d3 hover:bg-[#f8f8f8] hidden">
                                Unblock
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[22px] text-[#161823] flex items-center">
                    <div className="mr-5">
                        <strong className="text-lg/6">0</strong>
                        <span className="ml-[6px] text-[#161823BF]">Following</span>
                    </div>
                    <div className="mr-5">
                        <strong className="text-lg/6">3M</strong>
                        <span className="ml-[6px] text-[#161823BF]">Followers</span>
                    </div>
                    <div className="mr-5">
                        <strong className="text-lg/6">114.5M</strong>
                        <span className="ml-[6px] text-[#161823BF]">Likes</span>
                    </div>
                </div>
                <div className="text-[#161823] mt-[10px] leading-[21px]">partners@schannel.vn</div>
                <div className="absolute top-3 right-0 grid grid-cols-2 gap-[18px]">
                    <ToolTipShareWrapper>
                        <div className="py-1 cursor-pointer">
                            <PiShareFatBold className="col-span-1 text-2xl" />
                        </div>
                    </ToolTipShareWrapper>
                    <HeadlessTippy
                        placement="bottom-end"
                        interactive={true}
                        offset={[-195, 14]}
                        delay={[100, 500]}
                        zIndex={2}
                        render={(attrs) => (
                            <div
                                className={
                                    cx('ui-popup-container') +
                                    ' w-[180px] py-2 absolute -right-5 translate-x-full top-0 text-black rounded-lg bg-white'
                                }
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 16px' }}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <div className="flex items-center cursor-pointer px-4 py-2 font-semibold hover:bg-[#16182308]">
                                    <PiFlagBold className="w-6" />
                                    <div className="ms-4 text-[15px]">Report</div>
                                </div>
                                <hr></hr>
                                <div className="flex items-center cursor-pointer px-4 py-2 font-semibold hover:bg-[#16182308]">
                                    <LuBan className="w-6" />
                                    <div className="ms-4 text-[15px]">Block</div>
                                </div>
                            </div>
                        )}
                    >
                        <div className="py-1">
                            <BsThreeDots className="col-span-1 text-2xl cursor-pointer" />
                        </div>
                    </HeadlessTippy>
                </div>
            </div>
            <div className={cx('tag-bar')}>
                {tags.map((tag, key) => {
                    return (
                        <div
                            key={key}
                            className={
                                (key !== tagStatus ? cx('tag-disable') : cx('tag-active')) +
                                (tag.display ? ' ' : ' hidden') +
                                ' flex flex-row items-center px-8 h-[44px] text-lg/6 font-semibold cursor-pointer'
                            }
                            onClick={() => handleClickTagStatus(key)}
                        >
                            <div className="flex items-center">
                                {tag.lock ? <HiLockClosed className="mr-[6px]" /> : ''}
                                <div>{tag.title}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className=''>
                <p className='mt-6 mb-4'>Playlists</p>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-1 p-3 bg-[#16182308] rounded flex flex-row cursor-pointer'>
                        <img src={PlaylistImg} alt='' className='w-[72px] aspect-square object-cover mr-3'/>
                        <div className='py-1 flex flex-col justify-between'>
                            <span className='font-bold'>Công việc, học tập</span>
                            <span className='text-[#16182399]'>3 posts</span>
                        </div>
                    </div>
                    <div className='col-span-1 p-3 bg-[#16182308] rounded flex flex-row cursor-pointer'>
                        <img src={PlaylistImg} alt='' className='w-[72px] aspect-square object-cover mr-3'/>
                        <div className='py-1 flex flex-col justify-between'>
                            <span className='font-bold'>Mình ở VTV</span>
                            <span className='text-[#16182399]'>4 posts</span>
                        </div>
                    </div>
                </div>
                <p className='mt-6 mb-4'>Videos</p>
                <div className='w-full grid grid-cols-4 desktop-1:grid-cols-5 desktop-1/2:grid-cols-6 desktop-2:grid-cols-7 desktop-3:grid-cols-8 gap-y-6 gap-x-4'>
                    {videoApi.map((video, key) => 
                        <VideoExpore className="col-span-1" key={key} src={video.src} posterImg={video.posterImg} IsPlaying={isPlaying === key ? true : false}  onMouseEnter={() => handlePlayVideo(key)}/>) 
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
