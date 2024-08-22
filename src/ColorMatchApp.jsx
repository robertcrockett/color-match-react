import "./ColorMatchApp.css";
import Footer from "./components/Footer";
import { MemoizedHelp } from "./components/Help";
import { MemoizedNumberButton } from "./components/NumberButton";
import useCountdown from "./hooks/useCountdown";

/**
 * 
 * @returns A JSX object representing the Color Match application
 */
function ColorMatchApp() {
  const { countdown, start, pause } = useCountdown(15);

  const onStartClick = () => {
    start();
  }

  const numbers = [8, 5, 12, 13, 5, 16];
  const renderNumberButtons = numbers.map((number, index) => 
    <MemoizedNumberButton key={index} number={number} />
  );

  return (
    <div className='game'>
      <MemoizedHelp />
      <div className='target'>42</div>
      <div className='challenge-numbers'>
        {renderNumberButtons}
      </div>
      <Footer timerValue={countdown} onStartClick={onStartClick} />
    </div>
  );
}

export default ColorMatchApp;
