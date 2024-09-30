import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from 'react';
import PopupWrapper from '~/components/popup/PopupWrapper/PopupWrapper';
import { useCallback } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

    const [displayBackToTop, setDisplayBackToTop] = useState(false)
    const handleDisplayBackToTop = () => {
        if (window.scrollY >= 50) {
            setDisplayBackToTop(true)
        } else {
            setDisplayBackToTop(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleDisplayBackToTop);
        return window.addEventListener("scroll", handleDisplayBackToTop);
    }, [displayBackToTop])

    const scrollToTop = useCallback(() => {
        scroll.scrollToTop({
            duration: 500, // Example: scroll duration in milliseconds
        })
    }, [])

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('content')}>{children}</div>
            </div>
            <PopupWrapper displayBackToTop={displayBackToTop} scrollToTop={scrollToTop}/>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
