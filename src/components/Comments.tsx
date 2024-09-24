import { Comment, Reply } from "./model/data.interface"
import Score from "./Score"
import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
import replyIcon from "../assets/images/icon-reply.svg"
import editIcon from "../assets/images/icon-edit.svg"
import deleteIcon from "../assets/images/icon-delete.svg"
import { SetStateAction, useState } from "react"
import AddCommentComponent from "./AddCommentComponent"
import Modal from "./Modal"
import useIsMobile from "./hooks/useIsMobile"

const formatTimeDifference = (createdAt: string): string => {
  const now = new Date()
  const created = new Date(createdAt)
  const diffInSeconds = Math.floor((now.getTime() - created.getTime()) / 1000)

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`
  return `${Math.floor(diffInSeconds / 604800)} weeks ago`
}
interface CommentsProps {
  comment: Comment | Reply
  onSubmitComment: (id: string | number, content: string) => void
}
function Comments({
  comment,
  onSubmitComment = () => {},
  onEditComment = () => {},
  onDeleteComment = () => {},
  updateCommentScore = () => {},
}: CommentsProps) {
  const [expand, setExpand] = useState(false)
  const [expandEdit, setExpandEdit] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [editContent, setEditContent] = useState(comment.content)
  const isMobile = useIsMobile()

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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className="comment">
        {!isMobile && (
          <Score
            score={comment.score}
            onUpdateScore={(newScore) =>
              updateCommentScore(comment.id, newScore)
            }
          />
        )}
        <div className="comment-body">
          <div className="comment-header">
            <div className="comment-header-text">
              <img src={juliusomoPng} alt="user profile picture" width="35px" />
              <h4 className="comment-username">juliusomo</h4>
              <p className="comment-created">
                {formatTimeDifference(comment.createdAt)}
              </p>
            </div>
            {!isMobile && (
              <div className="comment-header-actions">
                <button className="reply-btn" onClick={toggleExpand}>
                  <i>
                    <img src={replyIcon} alt="" />
                  </i>
                  Reply
                </button>
                <button
                  className="delete-btn"
                  // onClick={() => onDeleteComment(comment.id)}
                  onClick={openModal}
                >
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
            )}
          </div>
          {expandEdit ? (
            <AddCommentComponent
              comment={editContent}
              handleChange={handleChange}
              handleSubmit={handleEditSubmit}
              buttonText={"UPDATE"}
              isUpdateTextArea={expandEdit}
            />
          ) : (
            <p className="comment-text">{comment.content}</p>
          )}
        </div>
        {isMobile && (
          <div className="mobile-comment-header-actions">
            <>
              <Score
                score={comment.score}
                onUpdateScore={(newScore) =>
                  updateCommentScore(comment.id, newScore)
                }
              />
              <div className="comment-header-actions">
                <button className="reply-btn" onClick={toggleExpand}>
                  <i>
                    <img src={replyIcon} alt="" />
                  </i>
                  Reply
                </button>
                <button
                  className="delete-btn"
                  // onClick={() => onDeleteComment(comment.id)}
                  onClick={openModal}
                >
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
            </>
          </div>
        )}
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
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        message={
          "Are you sure you want to delete this comment? This will remove the coment and can't be undone"
        }
        title={"Delete Comment"}
        onClose={closeModal}
        onConfirm={() => onDeleteComment(comment.id)}
      />
    </>
  )
}

export default Comments
