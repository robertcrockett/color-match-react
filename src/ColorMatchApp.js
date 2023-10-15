import "./ColorMatchApp.css";
import NumberButton from "./components/NumberButton";

function ColorMatchApp() {
  return (
    <div className='game'>
      <div className='help'>
        Pick 4 numbers that sum to the target in 15 seconds
      </div>
      <div className='target'>42</div>
      <div className='challenge-numbers'>
        <NumberButton number={8} />
        <NumberButton number={5} />
        <NumberButton number={12} />
        <NumberButton number={13} />
        <NumberButton number={5} />
        <NumberButton number={16} />
      </div>
      <div className='footer'>
        <div className='timer-value'>15</div>
        <button>Start</button>
      </div>
    </div>
  );
}

export default ColorMatchApp;
