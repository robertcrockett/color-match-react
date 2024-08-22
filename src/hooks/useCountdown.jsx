import { useEffect, useState } from "react";

const useCountdown = (initialValue) => {
  const [countdown, setCountdown] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, countdown]);

  return { countdown, start: () => setIsRunning(true), pause: () => setIsRunning(false) };
};

export default useCountdown;