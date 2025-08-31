import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("dark:bg-dark-300 bg-light-800 animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
