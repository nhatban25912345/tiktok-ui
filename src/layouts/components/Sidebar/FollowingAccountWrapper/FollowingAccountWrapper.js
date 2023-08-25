import axios from "axios";
import styles from "./FollowingAccountWrapper.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import AccountItem from '~/components/AccountFollowingItem';

const cx = classNames.bind(styles);

function FollowingAccountWrapper() {

    const [userFollowing, setUserFollowing] = useState([])
    const [userQuantity, setUserQuantity] = useState(5)

    useEffect(() => {
        const getUserFollowing = async () => {
            const users = await axios.get("https://nhatban25912345.github.io/api-tiktok/follower_accounts.json").then()
            setUserFollowing(users.data)
        }
        getUserFollowing();
    }, []);

    return (  
        <div className={cx("wrapper")}>
            <div className="w-full px-2 mb-2 text-sm font-semibold text-[#161823bf]">Following accounts</div>
            {userFollowing.slice(0, userQuantity).map((user, key) => 
                <AccountItem key={key} data={user} />
            )}

            {   
                userQuantity <= 5 ?
                <div className="w-full px-2 mt-2 text-sm text-[#fe2c55] font-semibold cursor-pointer" onClick={() => setUserQuantity(userFollowing.length < 10 ? userFollowing.length : 10 )}>See more</div>
                : <div className="w-full px-2 mt-2 text-sm text-[#fe2c55] font-semibold cursor-pointer" onClick={() => setUserQuantity(5)}>See less</div>

            }

        </div>
    );
}

export default FollowingAccountWrapper;