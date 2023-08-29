import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import { animateScroll as scroll } from "react-scroll";
import { BackToTopIcon } from '~/components/Icons';
import { useEffect, useState } from 'react';

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

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500, // Example: scroll duration in milliseconds
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('content')}>{children}</div>
            </div>
            {displayBackToTop ? <div className='fixed z-50 bottom-2 right-6 w-8 h-8 bg-[#FE2C55] rounded-full flex justify-center items-center cursor-pointer' onClick={scrollToTop}><BackToTopIcon className="text-white"/></div> : <></>}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
