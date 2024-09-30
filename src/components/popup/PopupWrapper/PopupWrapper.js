import { BackToTopIcon } from '~/components/Icons';
import HotKeyPopup from '../HotKeyPopup/HotKeyPopup';
import SuggestDownloadPopup from '../SuggestDownloadPopup/SuggestDownloadPopup';
import { useState } from 'react';

function PopupWrapper({ displayBackToTop = true, scrollToTop }) {
    const [displayHotKeyPopup, setDisplayHotKeyPopup] = useState(false);
    const [displaySuggestDownloadPopup, setDisplaySuggestDownloadPopup] = useState(false);

    const handleHotKeyPopupCloseBtn = () => {
        setDisplayHotKeyPopup(false);
    };
    const handleSuggestDownloadPopupBtn = () => {
        setDisplaySuggestDownloadPopup((prev) => !prev);
    };
    return (
        <div className="fixed z-50 bottom-0 right-6 flex flex-col items-end">
            {displayHotKeyPopup ? <HotKeyPopup handleHotKeyPopupCloseBtn={handleHotKeyPopupCloseBtn} /> : <></>}
            <SuggestDownloadPopup
                display={displaySuggestDownloadPopup}
                handleSuggestDownloadPopupBtn={handleSuggestDownloadPopupBtn}
            />
            <div
                className={
                    displayBackToTop
                        ? 'w-8 h-8 bg-[#FE2C55] rounded-full flex justify-center items-center cursor-pointer translate-y-0 ease-linear duration-300 mb-2'
                        : 'w-8 h-0 bg-[#FE2C55] rounded-full flex justify-center items-center cursor-pointer translate-y-8 ease-linear duration-300 '
                }
                onClick={scrollToTop}
            >
                <BackToTopIcon className="text-white" />
            </div>
        </div>
    );
}

export default PopupWrapper;
