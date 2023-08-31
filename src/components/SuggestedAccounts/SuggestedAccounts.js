import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    // const user = [];

    // const users = fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=f&type=less')
    //     .then((res) => res.json())
    //     .then((users) => users.data);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{label}</p>
            {/* {users.map((user) => (
                <AccountItem data={user} key={user.id} />
            ))} */}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
