import { Comment, Reply } from "./model/data.interface"
import Score from "./Score"
import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
import replyIcon from "../assets/images/icon-reply.svg"
import editIcon from "../assets/images/icon-edit.svg"
import deleteIcon from "../assets/images/icon-delete.svg"
import { SetStateAction, useState } from "react"
import AddCommentComponent from "./AddCommentComponent"
interface CommentsProps {
  comment: Comment | Reply
  onSubmitComment: (id: string | number, content: string) => void
}
function Comments({ comment, onSubmitComment }: CommentsProps) {
  const [expand, setExpand] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const toggleExpand = () => {
    setExpand(!expand)
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setReplyContent(e.target.value)
  }

  const handleReplySubmit = () => {
    if (replyContent) {
      console.log("getting inside handle reply submit")
      onSubmitComment(comment.id, replyContent)
      setReplyContent("")
    }
    toggleExpand()
  }
  return (
    <>
      <div className="comment">
        <Score score={comment.score} />
        <div className="comment-body">
          <div className="comment-header">
            <div className="comment-header-text">
              <img src={juliusomoPng} alt="user profile picture" width="35px" />
              <h4 className="comment-username">juliusomo</h4>
              <p className="comment-created">1 month ago</p>
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
          comment={replyContent}
          handleChange={handleChange}
          handleSubmit={handleReplySubmit}
        />
      )}
      <div className="replies-container">
        {comment?.replies?.map((reply) => (
          <Comments
            comment={reply}
            key={reply.id}
            onSubmitComment={onSubmitComment}
          />
        ))}
      </div>
    </>
  )
}

export default Comments
