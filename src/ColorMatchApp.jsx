import "./ColorMatchApp.css";
import Footer from "./components/Footer";
import Help from "./components/Help";
import NumberButton from "./components/NumberButton";

/**
 * 
 * @returns A JSX object representing the Color Match application
 */
function ColorMatchApp() {
  return (
    <div className='game'>
      <Help />
      <div className='target'>42</div>
      <div className='challenge-numbers'>
        <NumberButton number={8} />
        <NumberButton number={5} />
        <NumberButton number={12} />
        <NumberButton number={13} />
        <NumberButton number={5} />
        <NumberButton number={16} />
      </div>
      <Footer timerValue={15} />
    </div>
  );
}

export default ColorMatchApp;
