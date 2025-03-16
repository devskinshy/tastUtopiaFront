interface IconProps {
  className?: string;
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 10.182V22h18V10.182L12 2L3 10.182Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function RankingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 18.5C4 16.567 5.567 15 7.5 15h9c1.933 0 3.5 1.567 3.5 3.5V22H4v-3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MagazineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM7 7h10M7 11h10M7 15h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 21v-2a7 7 0 0 1 14 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 5v14m-7-7h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
