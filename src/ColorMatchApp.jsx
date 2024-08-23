import "./ColorMatchApp.css";
import Footer from "./components/Footer";
import { MemoizedHelp } from "./components/Help";
import { MemoizedNumberButton } from "./components/NumberButton";
import React, { useEffect, useState } from "react";
import useCountdown from "./hooks/useCountdown";
import { generateNumbers } from "./utils";

/**
 * 
 * @returns A JSX object representing the Color Match application
 */
function ColorMatchApp() {
  const { countdown, start } = useCountdown(15);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(generateNumbers(42));
  }, []);

  return (
    <div className='game'>
      <MemoizedHelp />
      <div className='target'>42</div>
      <div className='challenge-numbers'>
        {numbers.map((number, index) => 
          <MemoizedNumberButton key={index} number={number} />
        )}
      </div>
      <Footer timerValue={countdown} onStartClick={start} />
    </div>
  );
}
export default ColorMatchApp;
