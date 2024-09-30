import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks/useDebounce';

import * as searchService from '~/services/searchService';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { SearchIcon } from '../Icons';

const cx = classNames.bind(styles);

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResut] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue, 'less');
            setSearchResult(result);

            setLoading(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    const handleClearBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResut(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                appendTo={document.body}
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx('search-item')}>Accounts</h4>
                            {searchResult.map((result, index) => (
                                <AccountItem key={index} data={result}/>
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
                        onChange={handleChange}
                        onFocus={() => setShowResut(true)}
                    />
                    {!!searchValue && !loading && (
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} onClick={handleClearBtn} />
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchBar;
