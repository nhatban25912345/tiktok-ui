import classNames from 'classnames/bind';
import styles from './../VideoCard.module.scss';

const cx = classNames.bind(styles);

function Processbar({ currentTime, duration, video }) {
    console.log(currentTime, duration);
    const progressWidth = `${Math.round(
        (((video && video.currentTime) || 0) / ((video && video.duration) || 1)) * 100,
    )}%`;

    return (
        <div className={cx('progress-bar-inner') + ` h-full bg-white absolute`} style={{ width: progressWidth }}>
            <div
                className={
                    cx('progress-bar-btn') +
                    ` hidden w-3 h-3 rounded-full bg-white absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10`
                }
            />
        </div>
    );
}

export default Processbar;
