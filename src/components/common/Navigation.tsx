'use client';

import { cn } from '@/lib/utils';
import { NavigationProps } from '@/types/navigation';
import { NavButton } from '@/components/common/NavButton';
import {
  HomeIcon,
  RankingIcon,
  MagazineIcon,
  MyIcon,
  PlusIcon,
} from '@/components/icons/NavigationIcons';

const navigationItems = [
  { icon: HomeIcon, label: '홈', active: true },
  { icon: RankingIcon, label: '랭킹' },
  { icon: MagazineIcon, label: '대기표' },
  { icon: MyIcon, label: 'MY' },
];

export default function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn('safe-area-bottom w-full', className)}>
      <div className="relative flex justify-around items-center h-16 px-4">
        {navigationItems.slice(0, 2).map((item) => (
          <NavButton key={item.label} {...item} />
        ))}

        <button
          className="-translate-y-3 flex items-center justify-center w-[60px] h-[60px] bg-orange-500 rounded-full shadow-lg"
          aria-label="새 글 작성"
        >
          <PlusIcon className="w-8 h-8 text-white" />
        </button>

        {navigationItems.slice(2).map((item) => (
          <NavButton key={item.label} {...item} />
        ))}
      </div>
    </nav>
  );
}
