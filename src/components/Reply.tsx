import type { Reply as ReplyType } from "./model/data.interface" // Import 'Reply' as a type only
import Score from "./Score"
import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
interface ReplyProps {
  reply: ReplyType // Use the imported 'ReplyType' as the type for your prop
}

function Reply({ reply }: ReplyProps) {
  return (
    <>
      <div className="comment">
        <Score />
        <div className="comment-body">
          <div className="comment-header">
            <img src={juliusomoPng} alt="user profile picture" width="35px" />
            <h4 className="comment-username">{reply.user.username}</h4>
            <p className="comment-created">{reply.createdAt}</p>
          </div>
          <p className="comment-text">{reply.content}</p>
        </div>
      </div>
    </>
  ) // Example usage of the 'reply' prop
}

export default Reply
