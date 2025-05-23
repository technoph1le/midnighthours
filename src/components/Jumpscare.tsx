"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Jumpscare({ trigger }: { trigger: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const audio = new Audio("/assets/jumpscare-sound-effect.mp3");
      audio.play();

      if (navigator.vibrate) navigator.vibrate(500);

      const timeout = setTimeout(() => {
        setVisible(false);
      }, 2000); // 2 seconds of scare

      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <div className={`jumpscare ${visible ? "visible" : ""}`}>
      <Image src="/assets/clown.png" alt="Jumpscare" width={612} height={800} />
    </div>
  );
}
