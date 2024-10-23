interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className = '' }: TextProps) {
  return <p className={`font-sans ${className}`}>{children}</p>;
}
