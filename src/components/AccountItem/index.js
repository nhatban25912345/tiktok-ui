import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClassNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = ClassNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0080d5aec67bd98a8a74a87125525bed~c5_300x300.webp?x-expires=1667390400&x-signature=YeGH%2BkSgaEgAoz%2BHFX41naDVkuE%3D" alt="Haa" />
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
