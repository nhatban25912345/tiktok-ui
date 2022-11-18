import PropTypes from "prop-types";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function Header({ title, onBack }) {
    return (
        <div className={cx("header")}>
            <Button className={cx("back-btn")} onClick={onBack} >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <h4 className={cx("header-title")}>{title}</h4>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;
