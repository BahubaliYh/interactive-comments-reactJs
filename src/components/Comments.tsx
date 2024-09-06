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
function Comments({ comment, onSubmitComment, onEditComment }: CommentsProps) {
  const [expand, setExpand] = useState(false)
  const [expandEdit, setExpandEdit] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [editContent, setEditContent] = useState(comment.content)
  const toggleExpand = () => {
    setExpand(!expand)
  }
  const toggleEditExpand = () => {
    setExpandEdit(!expandEdit)
    setEditContent(comment.content)
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    if (expandEdit) {
      setEditContent(e.target.value)
    } else {
      setReplyContent(e.target.value)
    }
  }

  const handleReplySubmit = () => {
    if (replyContent) {
      console.log("getting inside handle reply submit")
      onSubmitComment(comment.id, replyContent)
      setReplyContent("")
    }
    toggleExpand()
  }

  const handleEditSubmit = () => {
    onEditComment(comment.id, editContent)
    setExpandEdit(false)
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
              <button className="edit-btn" onClick={toggleEditExpand}>
                <i>
                  <img src={editIcon} alt="" />
                </i>
                Edit
              </button>
            </div>
          </div>
          {expandEdit ? (
            <AddCommentComponent
              comment={editContent}
              handleChange={handleChange}
              handleSubmit={handleEditSubmit}
              buttonText={"UPDATE"}
              isUpdateTextArea={true}
            />
          ) : (
            <p className="comment-text">{comment.content}</p>
          )}
        </div>
      </div>
      {expand && (
        <AddCommentComponent
          comment={replyContent}
          handleChange={handleChange}
          handleSubmit={handleReplySubmit}
          buttonText={"REPLY"}
        />
      )}
      <div className="replies-container">
        {comment?.replies?.map((reply) => (
          <Comments
            comment={reply}
            key={reply.id}
            onSubmitComment={onSubmitComment}
            onEditComment={onEditComment}
          />
        ))}
      </div>
    </>
  )
}

export default Comments
