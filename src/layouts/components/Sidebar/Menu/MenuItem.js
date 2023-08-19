import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink, useLocation  } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({title, to, icon, activeIcon}) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return ( 
        <NavLink className={cx("menu-item", { active: isActive })} to={to}>
            <span className='text-[32px]'>{isActive ? activeIcon : icon}</span>
            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}

export default MenuItem;