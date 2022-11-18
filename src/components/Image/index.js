import { forwardRef } from "react";
import PropTypes from "prop-types";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss"

const Image = forwardRef(({className, src, alt, ...props}, ref) => {
    
    const fallback = images.noImage;
    if (src === undefined) {
        src = fallback;
    }
    // const [fallback, setFallback] = useState("");
    // const handleError = () => {
    //     // setFallback(images.noImage);
    //     console.log("onError");
    // }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
            // onError={handleError}
        />
    )
})

Image.propTypes = {
    className: PropTypes.string, 
    src: PropTypes.string, 
    alt: PropTypes.string,
}

export default Image;