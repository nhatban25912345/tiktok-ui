import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    blackborder = false,
    disabled = false,
    rounded = false,
    leftIcon = false,
    rightIcon = false,
    mainIcon = true,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        primary,
        outline,
        blackborder,
        disabled,
        rounded,
        leftIcon,
        rightIcon,
        mainIcon,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = Link;
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title-button')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
