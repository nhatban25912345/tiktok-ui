import classNames from 'classnames/bind';
import styles from './../VideoCard.module.scss';

const cx = classNames.bind(styles);

function Processbar({ currentTime, duration, video }) {
    console.log(currentTime, duration);
    const progressWidth = `${Math.round(((video && video.currentTime) || 0) / ((video && video.duration) || 1) * 100)}%`;

    return (  
        <div>
            <div className={cx("progress-bar-inner") + ` h-full bg-white absolute`} 
                style={{ width: progressWidth }}
            >
            </div>
        </div>
    );
}

export default Processbar;
