import { IoMdClose } from 'react-icons/io';
import { FiMonitor } from 'react-icons/fi';
import { TbDeviceMobile } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function SuggestDownloadPopup({ display, handleSuggestDownloadPopupBtn }) {
    return display ? (
        <div
            className="mb-3 font-bold relative bg-white rounded-lg border border-[#16182308]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 8px' }}
        >
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={handleSuggestDownloadPopupBtn}>
                <IoMdClose />
            </div>
            <div className="ml-4 mr-12">
                <Link className="my-[6px] py-2 flex items-center border-b border-[#1618231f]">
                    <FiMonitor className="text-[21px]" />
                    <span className="ml-2">Get TikTok for desktop</span>
                </Link>
                <Link className="my-[6px] py-2 flex items-center">
                    <TbDeviceMobile className="text-[21px]" />
                    <span className="ml-2">Get TikTok App</span>
                </Link>
            </div>
        </div>
    ) : (
        <div
            className="mb-3 font-bold text-sm text-[#161823bf] relative bg-white rounded-[52px] border border-[#1618231f] min-w-[90px] h-8 inline-flex justify-center items-center cursor-pointer"
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
            onClick={handleSuggestDownloadPopupBtn}
        >
            Get app
        </div>
    );
}

export default SuggestDownloadPopup;
