"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Short({ reel }) {
  const [play, setPlay] = useState(false);
  const router = useRouter();
  return (
    <div
      onTouchStart={(e) => {
        e.preventDefault();
        setPlay(true);
      }}
      onTouchCancel={(e) => {
        e.preventDefault();
        setPlay(false);
      }}
      onMouseEnter={(e) => {
        e.preventDefault();
        setPlay(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setPlay(false);
      }}
      onClick={(e) => {
        router.push(`reels/${reel?._id}`);
      }}
    >
      <div className="relative m-0 flex h-72 max-h-none w-52 max-w-none items-center justify-start overflow-hidden rounded-lg md:h-80 md:w-60">
        {!play && (
          <Image
            priority
            crossOrigin="anonymous"
            fill
            className="object-cover"
            src={reel?.thumbanil}
            alt="reel"
          />
        )}
        {play && (
          <video
            crossOrigin="anonymous"
            autoPlay
            src={reel?.video}
            className="h-full w-full"
            controls={false}
            muted
            loop
          />
        )}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col">
          <p className="text-32 text-white">{reel?.name}</p>
        </div>
      </div>
    </div>
  );
}
