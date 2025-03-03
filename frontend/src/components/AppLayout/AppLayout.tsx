import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black">
      {children}
    </div>
  );
}
