import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PopperAccount.module.scss';
import { CheckIcon } from '../../Icons';
import Button from '../../Button';

const cx = classNames.bind(styles);

function PropperAccount({ children }) {
    return (
        <Tippy
            interactive
            delay={700}
            placement='bottom'
            offset={[-18]}
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <div className={cx('profile-content')}>
                         <div className={cx('head-content')}>
                            <img
                                className={cx("avatar")}
                                src="https://yt3.ggpht.com/yti/AJo0G0mEPLDRODB1rwerRndwLi5IN4NNVTwYItPIiSu7rA=s88-c-k-c0x00ffffff-no-rj-mo"
                                alt="avatar"
                            />
                            <Button primary>Follow</Button>
                        </div>
                        <div className={cx('profile-popper')}>
                            <p className={cx('nickname-popper')}>
                                <strong>thuhien1232001</strong>
                                <CheckIcon className={cx('check-icon')} />
                            </p>
                            <p className={cx('name-popper')}>Thu Hiền Official</p>
                        </div>
                        <div className={cx('user-stats')}>
                            <span className={cx('user-card-follower-count')}>8M</span>
                            <span className={cx('user-card-follower')}>Followers</span>
                            <span className={cx('user-card-like-count')}>583.3M</span>
                            <span className={cx('user-card-like')}>Likes</span>
                        </div>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

PropperAccount.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PropperAccount;
