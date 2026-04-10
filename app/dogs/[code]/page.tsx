import Image from "next/image";
import { ViewTransition } from "react";

export default async function DogPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const dogPhoto = `https://http.dog/${code}.jpg`;

  return (
    <ViewTransition name="dog-detail-page" enter={{
      'nav-forward': 'nav-forward',
      'nav-back': 'nav-back',
      default: 'none',
    }}
      exit="none">
      <div className="flex flex-col items-center justify-center">
        <ViewTransition name={`dog-${code}`} share="morph">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
            <Image
              src={dogPhoto}
              alt={`${code}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
        </ViewTransition>
        <h1 className="text-2xl font-bold">{code}</h1>
        <p className="text-lg text-zinc-500">Message</p>
      </div>
    </ViewTransition>
  )
}
