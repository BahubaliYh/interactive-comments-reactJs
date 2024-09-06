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
          replies: editNode(comment.replies, commentId, content),
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

  const editNode = (tree, commentId, content) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          content,
          createdAt: new Date().toDateString(),
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

  const editComment = (commentId, content) => {
    setComments((prevComments) => editNode(prevComments, commentId, content))
  }

  return {
    comments,
    insertComment,
    editComment,
  }
}

export default useCommentTree
