import ClassNames from "classnames/bind";
import styles from "./Propper.module.scss";

const cx = ClassNames.bind(styles);

function wrapper({children}) {
    return ( 
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default wrapper;