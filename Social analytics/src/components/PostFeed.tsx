import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import PostItem from './PostItem';
import { getPosts, Post } from '@/services/api';

const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Post Feed</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="p-3 border rounded-lg shadow-md">
              <h3 className="text-md font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostFeed;
