import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { useEffect } from 'react';

import { CheckIcon } from '../Icons';
import styles from "./FollowingAccounts.module.scss"

const cx = classNames.bind(styles);


function AccountItem({data}) {

    return ( 
        <div className={cx("account-item")}>
            <img className={cx("avatar")} src="https://yt3.ggpht.com/yti/AJo0G0mEPLDRODB1rwerRndwLi5IN4NNVTwYItPIiSu7rA=s88-c-k-c0x00ffffff-no-rj-mo" alt="avatar" />
            <div className={cx("profile")}>
                <p className={cx("nickname")}>
                    <strong>thuhien1232001</strong>
                    <CheckIcon className={cx("check-icon")}/>
                </p>
                <p className={cx("name")}>Thu Hiền Official</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;