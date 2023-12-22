import { twMerge } from "tailwind-merge"

function Skeleton({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={twMerge("animate-pulse rounded-md bg-muted bg-gray-200", className)}
        {...props}
      />
    )
  }
  
  export default Skeleton;