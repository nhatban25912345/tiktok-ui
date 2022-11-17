import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/Hooks';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icons';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResut] = useState(true);
    const [loading, setLoading] = useState(false);
    
    const debounced = useDebounce( searchValue, 500);
    console.log("re-render 1");
    
    const inputRef = useRef();

    useEffect(() => {
        if( !debounced ) {
            setSearchResult([]);
            return;
        } 

        setLoading(true);
        
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(response => response.json())
            .then(users => {
                setSearchResult(users.data);
                setLoading(false);
            })
            .catch(() => setLoading(false))

    }, [debounced]);

    const handleClearBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResut(false);
        console.log(showResult);
    };

    return (
        <HeadlessTippy
            // hideOnClick={searchResult.length > 0}
            // trigger="click"
            appendTo={document.body}
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <h4 className={cx('search-item')}>Accounts</h4>
                        {searchResult.map((result, index) => (
                            <AccountItem key={index} data={result} />
                        ))}
                    </PropperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResut(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClearBtn}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default SearchBar;
