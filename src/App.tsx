import "./App.css"
import AddCommentComponent from "./components/AddCommentComponent"
import Comments from "./components/Comments"
import useCommentTree from "./components/hooks/use-comment.tree"
import { DATA } from "./data"
function App() {
  const { comments } = DATA
  const [comment, setComment] = useState("")
  const { comments: coommentsData } = useCommentTree(comments)
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const handleSubmit = (e) => {
    if (comment) {
    }
  }
  return (
    <div className="container">
      {comments.map((comment) => (
        <Comments comment={comment} key={comment.id} />
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
