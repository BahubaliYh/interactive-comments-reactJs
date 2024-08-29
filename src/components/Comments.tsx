import { Comment } from "./model/data.interface"
import Reply from "./Reply"
import Score from "./Score"
import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
interface CommentsProps {
  comment: Comment
}
function Comments({ comment }: CommentsProps) {
  return (
    <>
      <div className="comment">
        <Score />
        <div className="comment-body">
          <div className="comment-header">
            <img src={juliusomoPng} alt="user profile picture" width="35px" />
            <h4 className="comment-username">{comment.user.username}</h4>
            <p className="comment-created">{comment.createdAt}</p>
          </div>
          <p className="comment-text">{comment.content}</p>
        </div>
      </div>
      <div className="replies-container">
        {comment?.replies?.map((reply) => (
          <Reply reply={reply} key={reply.id} />
        ))}
      </div>
    </>
  )
}

export default Comments
