"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function ProgressBar({ progress }: { progress: number }) {
  //   const [progress_, setProgress] = useState<number>(0);

  //   useEffect(() => {
  //     const timer = setTimeout(() => setProgress(progress), 500);
  //     return () => clearTimeout(timer);
  //   }, []);

  return <Progress value={progress} className="w-[100%] m-auto" />;
}
