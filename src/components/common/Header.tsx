'use client';

import { ArrowUpDown, Share2, Bookmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black px-4 pt-3">
      <h1 className="text-white text-xl font-bold mb-4">
        TAST<span className="text-orange-500">U</span>TOPIA
      </h1>
      <button className="w-full flex items-center justify-between bg-zinc-900 py-2.5 px-3 rounded-sm mb-2">
        <span className="text-white text-base">나의 맛집 리스트</span>
        <svg
          className="w-4 h-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center space-x-6">
          <ArrowUpDown className="h-5 w-5 text-gray-400" />
          <Share2 className="h-5 w-5 text-gray-400" />
          <Bookmark className="h-5 w-5 text-orange-500 fill-orange-500" />
        </div>
        <button className="px-3 py-1 bg-zinc-900 rounded-sm">
          <span className="text-xs text-gray-400">편집</span>
        </button>
      </div>
    </header>
  );
}
