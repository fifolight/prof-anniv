"use client";

import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Image
        src="/ballons.jpg"
        alt="Ballons"
        width={1000}
        height={1000}
        className="w-full h-72 object-cover"
        priority
      />

      <main className="flex flex-col grow w-full justify-start items-center px-6 md:px-10">
        <div className="w-full">
          <div className="relative">
            <Image
              src="/birthday-cake.png"
              alt="Cake"
              width={1000}
              height={1000}
              className="size-32 object-cover -mt-20"
              priority
            />
          </div>

          <div className="mt-16">
            <h1 className="text-xl font-bold tracking-tight leading-tight text-foreground">
              Prochains anniversaires de professeurs
            </h1>

            <hr className="mt-8 border-gray-100" />
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-xl+"
              captionLayout="dropdown"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
