import { forwardRef } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss"

function Image({className, src, alt, ...props}, ref) {
    
    const fallback = images.noImage;
    if (src === undefined) {
        src = fallback;
    }
    // const [fallback, setFallback] = useState("");
    // const handleError = () => {
    //     setFallback(images.noImage);
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
}

export default forwardRef(Image);