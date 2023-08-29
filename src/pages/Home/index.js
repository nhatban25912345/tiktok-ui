import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoCard from '~/components/VideoCard';
import video1 from "../../assets/video/Video1.mp4"
import posterImg from "../../assets/images/thumb-video.png"

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <VideoCard src={video1} posterImg={posterImg}/>
            <VideoCard src={video1} posterImg={posterImg}/>
            <VideoCard src={video1} posterImg={posterImg}/>
        </div>
    )
}

export default Home;
