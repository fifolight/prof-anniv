import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start font-sans ">
      <Image
        src="/ballons.jpg"
        alt="Ballons"
        width={1000}
        height={1000}
        className="w-full h-70 object-cover"
        priority
      />

      <main className="flex items-center justify-center bg-black max w-full">
        <h3 className="text-xl font-bold">
          Prochains anniversaires de professeurs
        </h3>
      </main>
    </div>
  );
}
