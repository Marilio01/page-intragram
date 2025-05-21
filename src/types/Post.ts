export interface Post {
  id: number;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
  isLiked: boolean;
}