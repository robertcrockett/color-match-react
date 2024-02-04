import { useEffect, useState } from "react";

const useCountdown = (initialValue) => {
  const [countdown, setCountdown] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return countdown;
};

export default useCountdown;