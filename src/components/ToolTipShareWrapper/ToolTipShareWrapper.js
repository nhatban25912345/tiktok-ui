import classNames from 'classnames/bind';
import styles from './ToolTipShareWrapper.module.scss';
import { ImLink, ImWhatsapp } from 'react-icons/im';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsFacebook, BsPinterest, BsReddit, BsTelegram, BsTwitter } from 'react-icons/bs';
import { PiShareFatBold } from 'react-icons/pi';
import { CodeIcon, LineSocialIcon, MailCircleIcon } from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';


const cx = classNames.bind(styles);

function ToolTipShareWrapper({children}) {
    return (
        <HeadlessTippy
            placement="bottom-end"
            interactive={true}
            offset={[-280, 0]}
            delay={[100, 500]}
            zIndex={1}
            render={(attrs) => (
                <div 
                    className={cx("ui-popup-container") + 
                    ' w-[280px] max-h-[448px] py-2 absolute -right-5 translate-x-full top-0 text-black rounded-lg bg-white overflow-y-scroll'} 
                    style={{boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px"}}
                    tabIndex="-1" {...attrs}
                >
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <CodeIcon className='w-[26px] h-[26px]'/>
                        <div className='ms-3'>Embed</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <BsFacebook className='w-[26px] h-[26px] text-[#0075FA]'/>
                        <div className='ms-3'>Share to Facebook</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <div className='w-[26px] h-[26px] rounded-full flex justify-center items-center bg-[#25D366] text-white'><ImWhatsapp className='text-sm'/></div>
                        <div className='ms-3'>Share to WhatsApp</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <div className='w-[26px] h-[26px] rounded-full flex justify-center items-center bg-[#1DA1F2] text-white'><BsTwitter className=''/></div>
                        <div className='ms-3'>Share to Twitter</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <div className='w-[26px] h-[26px] rounded-full flex justify-center items-center bg-[#FE2C55] text-white'><ImLink className='text-xs'/></div>
                        <div className='ms-3'>Share Link</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <div className='w-[26px] h-[26px] rounded-full flex justify-center items-center bg-[#0A66C2] text-white'><BiLogoLinkedin className=''/></div>
                        <div className='ms-3'>Share to LinkedIn</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <BsReddit className='w-[26px] h-[26px] text-[#ff4500]'/>
                        <div className='ms-3'>Share to Reddit</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <BsTelegram className='w-[26px] h-[26px] text-[#37AEE2]'/>
                        <div className='ms-3'>Share to Telegram</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <MailCircleIcon className='w-[26px] h-[26px] text-white'/>
                        <div className='ms-3'>Share to Email</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <LineSocialIcon className='w-[26px] h-[26px] text-[#00B900]'/>
                        <div className='ms-3'>Share to Line</div>
                    </div>
                    <div className='flex items-center cursor-pointer mr-[3px] ml-1 px-4 py-[11px] font-semibold hover:bg-[#16182308]' >
                        <BsPinterest className='w-[26px] h-[26px] text-[#E60019]'/>
                        <div className='ms-3'>Share to Pinterest</div>
                    </div>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    )
}

export default ToolTipShareWrapper;
