import PropTypes from "prop-types";
import ClassNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = ClassNames.bind(styles);

function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>{children}</div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper;
