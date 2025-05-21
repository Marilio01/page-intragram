/* eslint-disable @next/next/no-img-element */
// src/components/PostItem.tsx
import React from "react";
import { Post } from "../types/Post";

interface Props {
  post: Post;
  onLike: () => void;
}

const PostItem: React.FC<Props> = ({ post, onLike }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center p-4">
        <img
          src={post.avatarUrl}
          alt={`${post.username}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold text-gray-800">
          {post.username}
        </span>
      </div>

      {/* Image */}
      <img
        src={post.imageUrl}
        alt="Post content"
        className="w-full object-cover"
      />

      {/* Footer */}
      <div className="p-4">
        {/* Like Button */}
        <button
          onClick={onLike}
          className="focus:outline-none transform transition-transform hover:scale-110"
          aria-label={post.isLiked ? "Descurtir" : "Curtir"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={post.isLiked ? "red" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block mr-2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <span className="font-semibold text-sm">
          {post.numberOfLikes.toLocaleString()} curtidas
        </span>

        {/* Description */}
        <p className="mt-2 text-sm">
          <span className="font-semibold">{post.username}</span>{" "}
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
