import classNames from 'classnames/bind';
import styles from './../VideoLive.module.scss';

const cx = classNames.bind(styles);

function VolumeBar({ currentTime, duration, video }) {
    // console.log(currentTime, duration);
    // const progressWidth = `${Math.round(((video && video.currentTime) || 0) / ((video && video.duration) || 1) * 100)}%`;

    return (  
        <div>
            <div className=''></div>
        </div>
    );
}

export default VolumeBar;
