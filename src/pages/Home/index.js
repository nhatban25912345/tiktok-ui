import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoCard from '~/layouts/components/VideoCard/VideoCard';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("wrapper")}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </div>
    )
}

export default Home;
