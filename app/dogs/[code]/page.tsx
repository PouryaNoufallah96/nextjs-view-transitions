import Image from "next/image";

export default async function DogPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const dogPhoto = `https://http.dog/${code}.jpg`;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg">
        <Image
          src={dogPhoto}
          alt={`${code}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 448px"
        />
      </div>
      <h1 className="text-2xl font-bold">{code}</h1>
      <p className="text-lg text-zinc-500">Message</p>
    </div>
  )
}
