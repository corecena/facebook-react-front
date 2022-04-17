import Topbar from "../../components/topbar/Topbar"
import "./home.css"
import SideBar from "../../components/sideBar/SideBar"
import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightBar/RightBar"
export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                
                <Feed />
                <RightBar />
            </div>
        </>
    );
}

