import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import RightBar from "../../components/rightBar/RightBar"
import Feed from "../../components/feed/Feed"
import SideBar from "../../components/sideBar/SideBar"
export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/posts/1.jpg" alt="" />
                            <img className="profileUserImg" src="assets/person/3.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">   Core </h4>
                            <span className="profileInfoDesc">core technologies</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar profile />
                    </div>

                </div>

            </div>

        </>
    )
}
