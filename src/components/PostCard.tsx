'use client';

import Image from 'next/image';
import { Post } from '../types/post';
import { Star, MoreHorizontal } from 'lucide-react';
import { Skeleton } from '@/components/Skeleton';

interface PostCardProps {
  post: Post;
  isLoading?: boolean;
}

export function PostCardSkeleton() {
  return (
    <div className="flex space-x-3 p-4">
      <Skeleton className="w-[80px] h-[80px] sm:w-[120px] sm:h-[140px] md:w-[140px] md:h-[160px] rounded-sm flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-5 w-14" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-6 w-6" />
        </div>
        <Skeleton className="h-4 w-3/4 mt-2" />
        <Skeleton className="h-3 w-1/4 mt-1" />
        <Skeleton className="h-3 w-2/4 mt-1" />
      </div>
    </div>
  );
}

export default function PostCard({ post, isLoading = false }: PostCardProps) {
  if (isLoading) return <PostCardSkeleton />;

  return (
    <div className="flex space-x-3 p-4 sm:p-5">
      <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[140px] md:w-[140px] md:h-[160px] relative flex-shrink-0 bg-zinc-800 rounded-sm overflow-hidden">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 140px"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800" />
        )}
      </div>
      <div className="flex-1 min-w-0 py-1 sm:py-2">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
            <span className="px-1.5 py-0.5 text-[11px] sm:text-xs border border-orange-500 text-orange-500 rounded-[6px]">
              {post.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500 fill-orange-500" />
              <span className="text-[11px] sm:text-xs text-gray-500">
                {post.rating}점
              </span>
            </div>
          </div>
          <button className="p-1 ml-2 flex-shrink-0">
            <MoreHorizontal className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
          </button>
        </div>
        <h3 className="text-white text-[15px] sm:text-base font-medium line-clamp-2 mb-2">
          {post.title}
        </h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs sm:text-sm text-gray-400 truncate">
            {post.author}
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-gray-500 mt-1 truncate">
          {post.timestamp}
        </p>
      </div>
    </div>
  );
}
