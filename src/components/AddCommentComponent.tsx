import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"

function AddCommentComponent() {
  return (
    <div className="add-comment-section">
      <div>
        <img src={juliusomoPng} alt="user profile picture" width="35px" />
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          className="add-comment-textbox"
          placeholder="Add comment.."
        ></textarea>
      </div>
      <div>
        <button className="send-btn">SEND</button>
      </div>
    </div>
  )
}

export default AddCommentComponent
