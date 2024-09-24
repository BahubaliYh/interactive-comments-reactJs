import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"
import useIsMobile from "./hooks/useIsMobile"

function AddCommentComponent({
  comment,
  handleChange,
  handleSubmit,
  buttonText,
  isUpdateTextArea = false,
}) {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile ? (
        <div
          className={`${
            isUpdateTextArea ? "edit-comment-section" : "add-comment-section"
          } `}
        >
          <div style={{ width: "100%" }}>
            <textarea
              value={comment}
              onChange={handleChange}
              className="add-comment-textbox"
              placeholder="Add comment.."
            ></textarea>
          </div>
          <div className="mobile-add-comment-section">
            {isUpdateTextArea ? (
              ""
            ) : (
              <div>
                <img
                  src={juliusomoPng}
                  alt="user profile picture"
                  width="35px"
                />
              </div>
            )}

            <div>
              <button className="send-btn" onClick={handleSubmit}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            isUpdateTextArea ? "edit-comment-section" : "add-comment-section"
          } `}
        >
          {isUpdateTextArea ? (
            ""
          ) : (
            <div>
              <img src={juliusomoPng} alt="user profile picture" width="35px" />
            </div>
          )}

          <div style={{ width: "100%" }}>
            <textarea
              value={comment}
              onChange={handleChange}
              className="add-comment-textbox"
              placeholder="Add comment.."
            ></textarea>
          </div>
          <div>
            <button className="send-btn" onClick={handleSubmit}>
              {buttonText}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddCommentComponent
