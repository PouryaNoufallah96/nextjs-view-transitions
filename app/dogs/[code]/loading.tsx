import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Skeleton className="aspect-square w-full max-w-md rounded-lg" />
    </div>
  );
}
