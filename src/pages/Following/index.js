import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import VideoCard from '~/components/VideoCard';
import video from "../../assets/video/Video2.mp4"
import posterImg from "../../assets/images/thumb-video-2.jpeg";

const cx = classNames.bind(styles);

function Following() {
    return ( 
        <div className={cx("wrapper")}>
            <VideoCard src={video}  posterImg={posterImg} isFollowing={true}/>
            <VideoCard src={video}  posterImg={posterImg} isFollowing={true}/>
            <VideoCard src={video}  posterImg={posterImg} isFollowing={true}/>
        </div>
    );
}

export default Following;