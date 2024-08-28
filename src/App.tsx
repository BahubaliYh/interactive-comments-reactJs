import "./App.css"
import AddCommentComponent from "./components/AddCommentComponent"
import Comments from "./components/Comments"
import { DATA } from "./data"
function App() {
  const { comments } = DATA
  return (
    <div className="container">
      {comments.map((comment) => (
        <Comments comment={comment} key={comment.id} />
      ))}
      <AddCommentComponent />
    </div>
  )
}

export default App
