import juliusomoPng from "../assets/images/avatars/image-juliusomo.png"

function AddCommentComponent() {
  return (
    <div className="add-comment-section">
      <div>
        <img src={juliusomoPng} alt="user profile picture" width="35px" />
      </div>
      <div>
        <textarea id="w3review" name="w3review" rows={4} cols={50}>
          Add a comment
        </textarea>
      </div>
      <div>
        <button className="send-btn">SEND</button>
      </div>
    </div>
  )
}

export default AddCommentComponent
