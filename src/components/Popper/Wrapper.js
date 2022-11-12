import ClassNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = ClassNames.bind(styles);

function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>{children}</div>
    )
}

export default Wrapper;
