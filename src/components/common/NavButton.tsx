'use client';

import { cn } from '@/lib/utils';
import { NavButtonProps } from '@/types/navigation';

export function NavButton({
  icon: Icon,
  label,
  active,
  className,
}: NavButtonProps) {
  return (
    <button
      className={cn('flex flex-col items-center group min-w-[56px]', className)}
    >
      <Icon
        className={cn(
          'h-6 w-6 mb-1',
          active ? 'text-orange-500' : 'text-gray-500',
        )}
      />
      <span
        className={cn(
          'text-[10px] font-medium',
          active ? 'text-orange-500' : 'text-gray-500',
        )}
      >
        {label}
      </span>
    </button>
  );
}
