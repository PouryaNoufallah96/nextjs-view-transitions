"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function DogFilter() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") ?? "all";

  return (
    <div className="mb-6 flex justify-center gap-2">
      <Link href="/">
        <Badge
          variant={filter === "all" ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-1"
        >
          All
        </Badge>
      </Link>
      <Link href="/?filter=popular">
        <Badge
          variant={filter === "popular" ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-1"
        >
          Popular
        </Badge>
      </Link>
    </div>
  );
}
