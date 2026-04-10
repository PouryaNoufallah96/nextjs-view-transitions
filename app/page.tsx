import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HTTP_DOGS } from "@/lib/http-dogs";
import Link from "next/link";
import { DogFilter } from "@/components/dog-filter";

const POPULAR_CODES = [200, 404, 500, 301, 418];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;

  const dogs = filter === "popular"
    ? HTTP_DOGS.filter((d) => POPULAR_CODES.includes(d.code))
    : HTTP_DOGS;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DogFilter />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dogs.map(({ code, message }) => (
            <Link href={`/dogs/${code}`} key={code} transitionTypes={['nav-forward']}>
              <Card>
                <div className="relative aspect-square">
                  <Image
                    src={`https://http.dog/${code}.jpg`}
                    alt={`${code} ${message}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{code}</CardTitle>
                  <CardDescription>{message}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
