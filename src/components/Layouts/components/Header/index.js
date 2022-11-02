import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PropperWrapper } from '~/components/Propper'
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/" className={cx("logo-container")}>
                        <img src={images.logo} alt="Tiktok"/>
                    </a>
                </div>
                <div className={cx('search')}>
                    <Tippy
                        placement='bottom'
                        interactive={true}
                        render={attrs => (
                            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                                <PropperWrapper>
                                    <h4 className={cx('search-item')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PropperWrapper>
                            </div>
                        )}
                    >
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                    </Tippy>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Button blackborder>
                        <FontAwesomeIcon className={cx("plus-icon")} icon={faPlus}/>
                        <span>Upload</span>
                    </Button>
                    <Button primary rightIcon={<FontAwesomeIcon className={cx("plus-icon")} icon={faSignIn}/>}>Log in</Button>
                    <i className={cx("option-btn")}><svg width="20px" height="20px" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path></svg></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
