// Interface for the image object
interface Image {
  png: string;
  webp: string;
}

// Interface for the user object
export interface User {
  image: Image;
  username: string;
}

// Interface for a reply, which is similar to a comment but without nested replies
export interface Reply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

// Interface for a comment, which may include an array of replies
export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

// Interface for the main data structure containing all comments
export interface CommentsData {
  currentUser: User;
  comments: Comment[];
}
