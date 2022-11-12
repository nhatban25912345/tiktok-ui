import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClassNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = ClassNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/84135939_864269564008747_839758091682578432_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cxGLEE7_xzgAX83lp50&_nc_ht=scontent.fhan14-2.fna&oh=00_AfAImFQSoDI-7_ly6ksILKi06ePNi9vsslQI9iqrCQE9Jw&oe=638A2393" alt="Haa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>happyhidari</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                </p>
                <p className={cx('username')}>shinha259</p>
            </div>
        </div>
    );
}

export default AccountItem;
