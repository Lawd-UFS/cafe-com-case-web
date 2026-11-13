"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-screen intro video, played once when the page loads.
 * The rest of the app only mounts after it ends, so no section
 * (or scroll animation) runs while the video is on screen.
 */
export function Intro({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browsers block autoplay with sound: try it first, fall back to muted.
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => setDone(true));
    });
  }, []);

  if (done) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-pepino">
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        playsInline
        onEnded={() => setDone(true)}
        onError={() => setDone(true)}
        className="size-full object-contain mix-blend-screen"
      />
      {muted && (
        <button
          type="button"
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.muted = false;
            setMuted(false);
          }}
          className="absolute bottom-6 rounded-full bg-pepino/80 px-4 py-2 text-sm text-areia"
        >
          Ativar som
        </button>
      )}
    </div>
  );
}
