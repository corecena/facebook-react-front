import "./rightBar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function RightBar({ profile }) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/person/2.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Pola foster</b> and <b>Other friends</b> have a birthday today
                     </span>
                </div>
                <img src="assets/posts/1.jpg" alt="" className="rightBarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:
                     </span>
                        <span className="rightbarInfoKey">
                            New York
                     </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:
                     </span>
                        <span className="rightbarInfoKey">
                            Kampala
                     </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:
                     </span>
                        <span className="rightbarInfoKey">
                            Single
                     </span>
                    </div>

                    <h4 className="rightbarTitle">User Friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">Core</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                
                <ProfileRightBar />
            </div>
        </div>
    )
}
