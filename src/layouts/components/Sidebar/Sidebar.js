import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon, ExploreIcon, ExploreActiveIcon } from "~/components/Icons";
import FollowingAccountWrapper from "./FollowingAccountWrapper/FollowingAccountWrapper";
import TagWrapper from "./TagWrapper/TagWrapper";

const cx = classNames.bind(styles);  

function Sidebar({className}) {
    return (
        <aside className={cx("wrapper") + ` ` + className}>
            <div className={cx("sidebar-inner")}>
                <Menu className={cx("menu")}>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon /> }/>
                    <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon /> }/>
                    <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon />} activeIcon={<ExploreActiveIcon /> }/>
                    <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon /> }/>
                </Menu>
                <FollowingAccountWrapper />
                <TagWrapper />
            </div>
        </aside>
    )
}

export default Sidebar;
