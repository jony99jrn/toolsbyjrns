import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Tools by JRN</h1>
      </div>
    </section>
  )
}
