import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill, BsThreeDots } from 'react-icons/bs';
import { PiFlagBold, PiShareFatBold } from 'react-icons/pi';
import { LuBan } from 'react-icons/lu';
import avatarDefault from "~/assets/images/avatar1.jpeg"
import { UserCheckIcon } from '~/components/Icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);

function VideoCard() {
    return (
        <div className={cx("wrapper")}>
            <div className='relative flex flex-col mb-5 max-w-[624px] pr-[92px]'>
                <div className='flex flex-row'>
                    <img src={avatarDefault} alt='avatar' className='w-[116px] h-[116px] mr-5 rounded-full '/>
                    <div className='flex flex-col content-start'>
                        <Link className="text-[32px]/[38px] mb-1 inline-flex flex-row items-center font-bold">
                            <span className="">dangthuhaf</span>
                            <BsFillCheckCircleFill
                                style={{ color: 'rgb(32, 213, 236)', width: '20', height: '20', marginLeft: '8px' }}
                            />
                        </Link>
                        <div className="text-lg/6 h-[25px] font-semibold">Đặng Thu Hà</div>
                        <div className='mt-4 flex min-w-[208px] h-9'>
                            <div className="w-full btn-follow-fullfill hidden">
                                Following
                            </div>
                            <div className='flex items-center'>
                                <Link className='btn-line-border-primary min-w-[164px] min-h-[36px] mr-2'>Messagers</Link>
                                <Tippy content="Unfollow" placement="bottom" className='p-1 opacity-80 font-semibold rounded-lg' duration={100}>
                                    <div className='p-[6px] cursor-pointer border rounded-sm border-[#1618231f]'><UserCheckIcon className=""/></div>
                                </Tippy>
                            </div>
                            <div className="w-full btn-line-border-black text-lg border-[#1618231f] hover:border-#d0d1d3 hover:bg-[#f8f8f8] hidden">
                                Unblock
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[22px] text-[#161823] flex items-center'>
                    <div className='mr-5'>
                        <strong className='text-lg/6'>0</strong>
                        <span className='ml-[6px] text-[#161823BF]'>Following</span>
                    </div>
                    <div className='mr-5'>
                        <strong className='text-lg/6'>3M</strong>
                        <span className='ml-[6px] text-[#161823BF]'>Followers</span>
                    </div>
                    <div className='mr-5'>
                        <strong className='text-lg/6'>114.5M</strong>
                        <span className='ml-[6px] text-[#161823BF]'>Likes</span>
                    </div>
                </div>
                <div className='text-[#161823] mt-[10px] leading-[21px]'>partners@schannel.vn</div>
                <div className='absolute top-3 right-0 grid grid-cols-2 gap-[18px]'>
                    <HeadlessTippy
                        placement="bottom-end"
                        interactive={true}
                        offset={[-195, 14]}
                        delay={[100, 500]}
                        zIndex={1}
                        render={(attrs) => (
                            <div 
                                className={cx("ui-popup-container") + 
                                ' w-[280px] py-2 absolute -right-5 translate-x-full top-0 text-black rounded-lg bg-white'} 
                                style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px"}}
                                tabIndex="-1" {...attrs}
                            >
                                <div className='flex items-center mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                                    <PiFlagBold className='w-6'/>
                                    <div className='ms-3'>Embed</div>
                                </div>
                                
                            </div>
                        )}
                    >
                        <div className='py-1'><PiShareFatBold className='col-span-1 text-2xl' /></div>
                    </HeadlessTippy>
                    <HeadlessTippy 
                        placement="bottom-end"
                        interactive={true}
                        offset={[-195, 14]}
                        delay={[100, 500]}
                        zIndex={2}
                        render={(attrs) => (
                            <div 
                                className={cx("ui-popup-container") + ' w-[180px] py-2 absolute -right-5 translate-x-full top-0 text-black rounded-lg bg-white'} 
                                style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px"}}
                                tabIndex="-1" {...attrs}
                            >
                                <div className='flex items-center px-4 py-2 font-semibold hover:bg-[#16182308]' >
                                    <PiFlagBold className='w-6'/>
                                    <div className='ms-4 text-[15px]'>Report</div>
                                </div>
                                <hr></hr>
                                <div className='flex items-center px-4 py-2 font-semibold hover:bg-[#16182308]' >
                                    <LuBan className='w-6'/>
                                    <div className='ms-4 text-[15px]'>Block</div>
                                </div>
                                
                            </div>
                        )}
                    >
                        <div className='py-1'><BsThreeDots className='col-span-1 text-2xl cursor-pointer '/></div>
                     </HeadlessTippy>
                    
                </div>
            </div>
            <div className=''></div>
        </div>
    )
}

export default VideoCard;
