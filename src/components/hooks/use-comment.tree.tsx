import { useState } from "react"

const useCommentTree = (initialComments) => {
  console.log("use comments tree", initialComments)
  const [comments, setComments] = useState(initialComments)

  return {
    comments,
  }
}

export default useCommentTree
