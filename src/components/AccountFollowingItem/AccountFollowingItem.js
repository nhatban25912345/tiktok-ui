import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClassNames from 'classnames/bind';
import styles from './AccountFollowingItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = ClassNames.bind(styles);

function AccountFollowingItem({ data }) {

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />}
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountFollowingItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountFollowingItem;
