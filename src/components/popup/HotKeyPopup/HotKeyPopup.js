import { IoMdClose } from "react-icons/io";
import { TbSquareLetterL, TbSquareLetterM } from "react-icons/tb";
import { OutlineArrowDownIcon, OutlineArrowUpIcon } from "~/components/Icons";

function HotKeyPopup({handleHotKeyPopupCloseBtn}) {
    return (
        <div
            className="min-w-[300px] min-h-[256px] pt-11 px-6 pb-4 mb-3 bg-white rounded-lg border border-[#16182308] relative"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 8px' }}
        >
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={handleHotKeyPopupCloseBtn}><IoMdClose /></div>
            <div className="flex flex-col flex-wrap content-start">
                <div className="font-bold text-lg">Giới thiệu các phím tắt trên bàn phím!</div>
                <div className="mt-4 flex flex-wrap flex-col text-[#53555d]">
                    <div className="h-10 flex flex-row justify-between items-center border-y border-[#1618231f]">
                        <span className="text-sm">Go to previous video</span>
                        <OutlineArrowUpIcon />
                    </div>
                    <div className="h-10 flex flex-row justify-between items-center border-b border-[#1618231f]">
                        <span className="text-sm">Go to next video</span>
                        <OutlineArrowDownIcon />
                    </div>
                    <div className="h-10 flex flex-row justify-between items-center border-b border-[#1618231f]">
                        <span className="text-sm">Like video </span>
                        <TbSquareLetterL className="text-2xl" />
                    </div>
                    <div className="h-10 flex flex-row justify-between items-center border-b border-[#1618231f]">
                        <span className="text-sm">Mute / unmute video </span>
                        <TbSquareLetterM className="text-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotKeyPopup;
