import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/Hooks';

import * as searchService from '~/apiServices/searchService';
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

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(debounced, 'less');
            setSearchResult(result);

            setLoading(false);
        };

        fetchAPI();
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
                        onChange={handleChange}
                        onFocus={() => setShowResut(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearBtn}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
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

// const fetchAPI = async () => {
//     try {
//         const res = await request.get("users/search", {
//             params: {
//                 q: debounced,
//                 type: "less"
//             },
//         });
//         setSearchResult(res.data);
//         setLoading(false);
//     } catch (err) {
//         setLoading(false);
//     }
// }
// fetchAPI();