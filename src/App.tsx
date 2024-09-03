import { useState } from "react"
import "./App.css"
import AddCommentComponent from "./components/AddCommentComponent"
import Comments from "./components/Comments"
import useCommentTree from "./components/hooks/use-comment.tree"
import { Comment, Reply } from "./components/model/data.interface"
import { DATA } from "./data"
function App() {
  const { comments } = DATA
  const [comment, setComment] = useState("")
  console.log("comments", comments)
  const { comments: commentsData } = useCommentTree(comments)
  console.log("commentsData", commentsData)
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const handleSubmit = (e) => {
    if (comment) {
      //
    }
  }
  return (
    <div className="container">
      {commentsData.map((comment: Comment | Reply) => (
        <Comments
          comment={comment}
          key={comment.id}
          onSubmitComment={handleChange}
        />
      ))}
      <AddCommentComponent
        comment={comment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
