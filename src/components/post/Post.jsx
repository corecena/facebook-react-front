import "./post.css"
 import {MoreVert} from "@material-ui/icons"
 import {Users} from "../../dummyData"
import { useState } from "react"
export default function Post({post}){
    const [like , setLike] = useState(post.like)
    const [isLiked, setisLiked] =useState(false)
    
    const likeHandler = ()=>{
        setLike(isLiked?like-1:like+1)
        setisLiked(!isLiked)
    }
    
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                      <img className="postProfileImg"src={Users.filter((u) => u.id===post.userId)[0].profilePicture} alt=""/>
                      <span className="postUserName">{Users.filter((u) => u.id===post.userId)[0].username}</span>
                      <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">
                     <MoreVert/>
                  </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg"/>

                </div>
                <div className="postBottom">
                     <div className="postBottomLeft">
                       <img className="likeIcon"  src="/assets/posts/like.jpg" alt="" onClick={likeHandler}/>
                       <img className="likeIcon" src="assets/posts/heart.jpg" alt="" onClick={likeHandler}/>
                       <span className="postLikeCounter">{like} people like it</span>
                     </div>
                     <div className="postBottomRight">
                         <span className="postCommentText">{post.comment} comments</span>
                     </div>
                </div>
            </div>
        </div> 
    )
}