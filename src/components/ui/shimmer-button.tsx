import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  shimmerColor?: string;
  className?: string;
  href?: string;
}

const ShimmerButton: FC<ShimmerButtonProps> = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shimmerColor = "white",
  className,
  href,
  ...props
}) => {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        "relative overflow-hidden",
        "px-6 py-3 bg-primary text-primary-foreground",
        "hover:bg-primary/90 transition-colors",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%]",
        "hover:before:animate-shine",
        "before:transition-all before:duration-500",
        "before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default ShimmerButton;
