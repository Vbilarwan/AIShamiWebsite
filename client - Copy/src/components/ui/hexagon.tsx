import { cn } from "@/lib/utils";

interface HexagonProps {
  className?: string;
  children: React.ReactNode;
}

export function Hexagon({ children, className }: HexagonProps) {
  return (
    <div className={cn("hexagon", className)}>
      {children}
    </div>
  );
}
