'use client';

import { useEffect, useState } from 'react';
import { mockPosts } from '@/lib/data';
import PostCard, { PostCardSkeleton } from '@/components/PostCard';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';
import ScrollTopButton from '@/components/common/ScrollTopButton';
import { Post } from '@/types/post';

const LOADING_DELAY = 1500;
const SKELETON_COUNT = 6;

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="divide-y divide-gray-800/30">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="divide-y divide-gray-800/30">
      {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1 w-full pb-24 overflow-y-auto">
        {loading ? <LoadingSkeleton /> : <PostList posts={posts} />}
      </main>
      <ScrollTopButton />
      <Navigation className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800/50" />
    </div>
  );
}
