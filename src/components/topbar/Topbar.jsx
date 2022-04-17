import "./topbar.css"
import {Search ,Person,Chat,Notifications} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className= "logo"> Coresocial</span>
                 
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                  <Search className="searchIcon"/>     
                    <input  placeholder="Search for friends or post or video " className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                   <span className="topbarLink">Home</span>
                   <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">13</span>
                    </div>
                    <img src="/assets/person/3.jpg" alt="" className="topbarImg"/>
                </div>
                
            </div>
            
        </div>
    )
}
 