import { ReactNode } from "react";

interface SelectorContainerProps {
  children: ReactNode;
}

export default function SelectorContainer({
  children,
}: SelectorContainerProps) {
  return <div className="flex items-center gap-2">{children}</div>;
}
