import axios from "axios";
import styles from "./TagWrapper.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function TagWrapper() {

    const [tags, setTags] = useState([])

    useEffect(() => {
        const getUserFollowing = async () => {
            const result = await axios.get("https://nhatban25912345.github.io/api-tiktok/tags.json").then()
            setTags(result.data)
        }
        getUserFollowing();
    }, []);

    return (  
        <div className={cx("wrapper")}>
            {tags.map((tag, key) => <Link to="/" key={key} className="text-[#16182380] text-xs font-semibold hover:underline inline-block mr-[6px] mt-[5px] ">{tag.title}</Link>)}
            <div className="w-full text-[#16182380] text-xs font-semibold inline-block mr-[6px] mt-2">© 2023 TikTok</div>
        </div>
    );
}

export default TagWrapper;