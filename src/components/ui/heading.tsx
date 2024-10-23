interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClass = `font-heading mb-4`;

  return <Tag className={`${baseClass} ${className}`}>{children}</Tag>;
}
