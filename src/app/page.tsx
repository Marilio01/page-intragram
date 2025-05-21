"use client"; // ← Adicione esta linha no topo

import React, { useState } from "react";
import PostItem from "../components/PostItem";
import { posts as initialPosts } from "../data/posts";

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              numberOfLikes: post.isLiked
                ? post.numberOfLikes - 1
                : post.numberOfLikes + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onLike={() => toggleLike(post.id)} />
        ))}
      </div>
    </div>
  );
}