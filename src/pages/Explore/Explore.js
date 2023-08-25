import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import VideoExpore from '~/layouts/components/VideoExpore';
import video from "../../assets/video/Video2.mp4"
import posterImg from "../../assets/images/thumb-video-2.jpeg";
import TagBar from './TagBar/TagBar';

const cx = classNames.bind(styles);

function Explore() {
    
    return ( 
        <div className={cx("wrapper")}>
            <TagBar />
            <div className='w-full grid grid-cols-3 gap-y-6 gap-x-4' style={{padding: "4px 48px 32px"}}>
                <VideoExpore />
                <VideoExpore />
                <VideoExpore />
                <VideoExpore />
                <VideoExpore />
            </div>
        </div>
    );
}

export default Explore;