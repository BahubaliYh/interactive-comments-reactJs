import { useState } from "react"

const useCommentTree = (initialComments) => {
  console.log("use comments tree", initialComments)
  const [comments, setComments] = useState(initialComments)

  const insertNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, content],
        }
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, content),
        }
      }

      return comment
    })
  }

  const insertComment = (commentId, content) => {
    const newComment = {
      id: Date.now(),
      content,
      score: 0,
      createdAt: new Date().toDateString(),
      replies: [],
    }

    if (commentId) {
      setComments((prevComments) =>
        insertNode(prevComments, commentId, newComment)
      )
    } else {
      setComments((prevComments) => [newComment, ...prevComments])
    }
  }

  return {
    comments,
    insertComment,
  }
}

export default useCommentTree
