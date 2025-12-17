import React, { useState } from "react";

export default function VideoHero({ bgImage, videoUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[600px]">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setOpen(true)}
            className="transition hover:scale-105"
          >
            <img
              src="/about/heroplay.png" 
              alt="Play"
              className="w-28 h-28 object-contain"
            />
          </button>
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-3xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1`}
              title="Hero Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
