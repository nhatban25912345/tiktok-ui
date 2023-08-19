import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';
import { BsFillCheckCircleFill, BsFillHeartFill, BsFillBookmarkFill } from 'react-icons/bs';
import { PiMusicNotesSimpleFill } from 'react-icons/pi';
import { BiSolidShare } from 'react-icons/bi';
import { FaCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function VideoCard() {

    useEffect(() => {

    })

    return (
        <div className={cx("wrapper") + " relative w-[692px] py-5 flex flex-row"}>
            <img
                className="w-[56px] h-[56px] rounded-full object-cover "
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e1b71e2e1f6a212401611d208b82524e~c5_100x100.jpeg?x-expires=1692493200&x-signature=MbDigy5JnZSy8p%2FXyoGRm%2F%2BpAGc%3D"
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
                    <Link className="btn-line-border absolute top-2 right-0 "><div>Follow</div></Link>
                    <div className="">Nay gặp trường hợp bất ngờ quá cũng may có cái tai nghe trừ 
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline mr-[2px]'>#huyquanhoa</span></Link>
                        <Link to="/"><span className='text-[#2b5db9] font-bold hover:underline'>#funny</span></Link>
                    </div>
                    <Link className="text-sm flex items-center text-[#161823] hover:underline">
                        <PiMusicNotesSimpleFill />
                        <span className='ml-1'>nhạc nền - Huy Quần Hoa</span>
                    </Link>
                </div>
                <div className="w-full flex items-end justify-start">
                    <div className={cx("video-wrapper") + " mr-5"}>
                        <video className='w-full h-full' src='https://v16-webapp-prime.tiktok.com/video/tos/maliva/tos-maliva-ve-0068c799-us/oIQfQe4UM9IamOAqOgPAofV0G4TA0FGRhZHm2f/?a=1988&ch=0&cr=3&dr=0&lr=unwatermarked&cd=0%7C0%7C0%7C3&cv=1&br=4280&bt=2140&cs=0&ds=6&ft=3.u4FZzI0PD12.A4bt3wU5Ee5SHEg9N1OLlc&mime_type=video_mp4&qs=0&rc=ZjZlaTo6aWkzPGZlNzloOkBpam1tazk6ZnVwbTMzZzczNEAvYjY1NGBgXmIxMWA2NGNgYSNrY3FncjRfY15gLS1kMS9zcw%3D%3D&btag=e00090000&expire=1692402346&l=20230818174442890B8E677686C0432E22&ply_type=2&policy=2&signature=21093af1c165a15ab77a69318f1a5f0c&tk=tt_chain_token'></video>
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
