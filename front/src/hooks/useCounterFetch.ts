import React, { useEffect, useState } from "react";

export default function useCounterFetch() {
  const [hitCount, setHitCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    fetch("/api/usageLogs")
      .then((response) => response.json())
      .then((data) => {
        setHitCount(data.hit);
        setShareCount(data.share);
      })
      .catch((err) => console.log("공유/방문자수 받아오는 err", err));
  }, []);

  return { hitCount, shareCount };
}
