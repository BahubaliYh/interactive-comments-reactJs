import { useState } from "react"

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments)
  return <div>use Comments </div>

  return {
    comments,
  }
}

export default useCommentTree
