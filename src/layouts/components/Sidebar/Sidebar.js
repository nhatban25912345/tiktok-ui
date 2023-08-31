import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import FollowingAccount from "~/components/FollowingAccounts";

const cx = classNames.bind(styles);  

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu >
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon /> }/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon /> }/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon /> }/>
            </Menu>
            <div className={cx("content")}>
                <SuggestedAccounts label="Suggested accounts" />
            </div>
            <div className={cx("content")}>
                <FollowingAccount label="Following accounts" />
            </div>
        </aside>
    )
}

export default Sidebar;
