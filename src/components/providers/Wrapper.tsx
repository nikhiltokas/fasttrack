import React from "react";
import { cn } from "@/common/lib";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("size-full mx-auto min-h-screen px-2", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
