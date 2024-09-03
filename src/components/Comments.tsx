import { Comment, Reply } from "./model/data.interface"
import Score from "./Score"
import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
import replyIcon from "../assets/images/icon-reply.svg"
import editIcon from "../assets/images/icon-edit.svg"
import deleteIcon from "../assets/images/icon-delete.svg"
import { useState } from "react"
import AddCommentComponent from "./AddCommentComponent"
interface CommentsProps {
  comment: Comment | Reply
}
function Comments({ comment, onSubmitComment }: CommentsProps) {
  const [expand, setExpand] = useState(false)
  const toggleExpand = () => {
    setExpand(!expand)
  }
  return (
    <>
      <div className="comment">
        <Score />
        <div className="comment-body">
          <div className="comment-header">
            <div className="comment-header-text">
              <img src={juliusomoPng} alt="user profile picture" width="35px" />
              <h4 className="comment-username">{comment.user.username}</h4>
              <p className="comment-created">{comment.createdAt}</p>
            </div>
            <div className="comment-header-actions">
              <button className="reply-btn" onClick={toggleExpand}>
                <i>
                  <img src={replyIcon} alt="" />
                </i>
                Reply
              </button>
              <button className="delete-btn">
                <i>
                  <img src={deleteIcon} alt="" />
                </i>
                Delete
              </button>
              <button className="edit-btn">
                <i>
                  <img src={editIcon} alt="" />
                </i>
                Edit
              </button>
            </div>
          </div>
          <p className="comment-text">{comment.content}</p>
        </div>
      </div>
      {expand && (
        <AddCommentComponent
          comment={undefined}
          handleChange={undefined}
          handleSubmit={undefined}
        />
      )}
      <div className="replies-container">
        {comment?.replies?.map((reply) => (
          <Comments comment={reply} key={reply.id} />
        ))}
      </div>
    </>
  )
}

export default Comments
