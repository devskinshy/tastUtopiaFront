export interface NavItem {
  icon: (props: { className?: string }) => JSX.Element;
  label: string;
  path?: string;
}

export interface NavButtonProps extends NavItem {
  active?: boolean;
  className?: string;
}

export interface NavigationProps {
  className?: string;
}
