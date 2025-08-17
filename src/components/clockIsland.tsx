import { useEffect, useState } from "react";

export default function ClockIsland() {
  const [time, setTime] = useState<string>(() =>
    new Date().toLocaleTimeString([], { hour12: false })
  );
  useEffect(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString([], { hour12: false })),
      1000
    );
    return () => clearInterval(id);
  }, []);
  return <span className="text-[10px] text-neutral-500 tabular-nums">{time}</span>;
}
