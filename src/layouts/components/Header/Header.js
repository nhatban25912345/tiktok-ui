import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faArrowRightFromBracket,
    faCircleDollarToSlot,
    faGear,
    faGlobe,
    faKeyboard,
    faMoon,
    faPlus,
    faQuestionCircle,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '~/components/Popper/Menu';
import SearchBar from '~/components/Search';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
        allShortcut: true,
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/live-studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const HandleMenuChange = (menuItem) => {
        if (menuItem.title === 'Keyboard shortcuts') {
        }
    };


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href={config.routes.home} className={cx('logo-container')}>
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>

                <SearchBar />
                {currentUser ? (
                    <div className={cx('current-user')}>
                        <Button blackborder>
                            <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                        <Tippy content="Message">
                            <div className={cx('main-icon-message-wrapper')}>
                                <Button mainIcon>
                                    <MessageIcon className={cx('main-icon-message')} />
                                </Button>
                            </div>
                        </Tippy>
                        <Tippy content="Inbox">
                            <div className={cx('main-icon-inbox-wrapper')}>
                                <Button mainIcon>
                                    <InboxIcon className={cx('main-icon-inbox')} />
                                </Button>
                            </div>
                        </Tippy>

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} hideOnClick={false} onChange={HandleMenuChange}>
                            <Image
                                className={cx('user-avatar')}
                                src="https://yt3.ggpht.com/yti/AJo0G0mEPLDRODB1rwerRndwLi5IN4NNVTwYItPIiSu7rA=s108-c-k-c0x00ffffff-no-rj"
                                alt="avatar"
                            />
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('actions')}>
                        <Button blackborder>
                            <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                        <Button primary>Log in</Button>
                        <Menu items={MENU_ITEMS} onChange={HandleMenuChange}>
                            <i className={cx('option-btn')}>
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
                                    ></path>
                                </svg>
                            </i>
                        </Menu>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
