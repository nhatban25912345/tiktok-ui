import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoCard from '~/layouts/components/VideoCard/VideoCard';
import video1 from "../../assets/video/Video1.mp4"

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <VideoCard src={video1}/>
            <VideoCard src={video1}/>
            <VideoCard src={video1}/>
        </div>
    )
}

export default Home;
