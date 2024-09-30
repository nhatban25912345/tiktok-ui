import { BsFillBookmarkFill, BsFillHeartFill } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import ToolTipShareWrapper from '~/components/ToolTipShareWrapper';
import { BiSolidShare } from 'react-icons/bi';
import { useState } from 'react';

function ActionBar() {

    const [likeStatus, setLikeStatus] = useState(false);
    const [saveStatus, setSaveStatus] = useState(false);

    const handleLikeStatus = () => {
        console.log(likeStatus);
        setLikeStatus(!likeStatus);
        console.log(likeStatus);
    }
    const handleSaveStatus = () => {
        setSaveStatus(!saveStatus);
    }
    
    return (
        <div className="flex flex-col select-none">
            <div className="w-12 cursor-pointer" onClick={() => handleLikeStatus()}>
                <div
                    className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]">
                    <BsFillHeartFill className={"duration-300 " + (likeStatus === true ? "text-[#fe2c55]" : "")} /></div>
                <div className="w-full text-sm font-bold text-[#161823bf]">451.4K</div>
            </div>
            <div className="w-12 cursor-pointer">
                <div
                    className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]">
                    <FaCommentDots className={"duration-300"} /></div>
                <div className="w-full text-sm font-bold text-[#161823bf]">15.2K</div>
            </div>
            <div className="w-12 cursor-pointer" onClick={() => handleSaveStatus()}>
                <div
                    className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[22px]">
                    <BsFillBookmarkFill className={"duration-300 " + (saveStatus === true ? "text-[#face15]" : "")} /></div>
                <div className="w-full text-sm font-bold text-[#161823bf]">18.4K</div>
            </div>
            <ToolTipShareWrapper positionTopStart>
                <div className="w-12">
                    <div
                        className="w-12 h-12 my-[10px] rounded-full bg-[#1618230f] flex justify-center items-center text-[26px]">
                        <BiSolidShare style={{ transform: "rotateY( 180deg)" }} /></div>
                    <div className="w-full text-sm font-bold text-[#161823bf]">485.2K</div>
                </div>
            </ToolTipShareWrapper>
        </div>
    )
}

export default ActionBar;
