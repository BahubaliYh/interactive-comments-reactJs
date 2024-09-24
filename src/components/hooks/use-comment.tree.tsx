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
      createdAt: new Date().toISOString(),
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
          createdAt: new Date().toISOString(),
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

  const editComment = (commentId, content) => {
    setComments((prevComments) => editNode(prevComments, commentId, content))
  }

  const deleteNode = (tree, commentId) => {
    return tree.reduce((acc, comment) => {
      if (comment.id === commentId) {
        return acc
      } else if (comment.replies && comment.replies.length > 0) {
        comment.replies = deleteNode(comment.replies, commentId)
      }

      return [...acc, comment]
    }, [])
  }

  const deleteComment = (commentId) => {
    setComments((prevComments) => deleteNode(prevComments, commentId))
  }

  const updateScoreNode = (tree, commentId, newScore) => {
    return tree.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          score: newScore,
        }
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: updateScoreNode(comment.replies, commentId, newScore),
        }
      }

      return comment
    })
  }

  const updateCommentScore = (commentId, newScore) => {
    setComments((prevComments) =>
      updateScoreNode(prevComments, commentId, newScore)
    )
  }

  return {
    comments,
    insertComment,
    editComment,
    deleteComment,
    updateCommentScore,
  }
}

export default useCommentTree
