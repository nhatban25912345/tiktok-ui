import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {
    faArrowRightFromBracket,
    faCircleDollarToSlot,
    faCircleXmark,
    faGear,
    faGlobe,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faPlus,
    faQuestionCircle,
    faSpinner,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '~/components/Popper/Menu';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

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
                },
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
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    const HandleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/" className={cx('logo-container')}>
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>

                <div className={cx('search')}>
                    <HeadlessTippy
                        hideOnClick={true}
                        trigger={'click'}
                        interactive={true}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PropperWrapper>
                                    <h4 className={cx('search-item')}>Accounts</h4>
                                    <AccountItem />
                                    {/* <AccountItem />
                                    <AccountItem /> */}
                                </PropperWrapper>
                            </div>
                        )}
                    >
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                    </HeadlessTippy>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {currentUser ? (
                    <div className={cx('current-user')}>
                        <Button blackborder>
                            <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                        <Tippy content="Message">
                            <div className={cx('main-icon-message-wrapper')}>
                                <Button mainIcon>
                                    <svg
                                        className={cx('main-icon-message')}
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 48 48"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>
                        </Tippy>
                        <Tippy content="Inbox">
                            <div className={cx('main-icon-inbox-wrapper')}>
                                <Button mainIcon>
                                    <svg
                                        className={cx('main-icon-inbox')}
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>
                        </Tippy>

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={HandleMenuChange}>
                            <img
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
