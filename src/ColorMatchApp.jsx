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
  const countdown = useCountdown(15);

  const onStartClick = () => {
    console.log('Start button clicked')
  }

  return (
    <div className='game'>
      <MemoizedHelp />
      <div className='target'>42</div>
      <div className='challenge-numbers'>
        <MemoizedNumberButton number={8} />
        <MemoizedNumberButton number={5} />
        <MemoizedNumberButton number={12} />
        <MemoizedNumberButton number={13} />
        <MemoizedNumberButton number={5} />
        <MemoizedNumberButton number={16} />
      </div>
      <Footer timerValue={countdown} onStartClick={onStartClick} />
    </div>
  );
}

export default ColorMatchApp;
