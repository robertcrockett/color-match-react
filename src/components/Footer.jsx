import PropTypes from "prop-types";

/**
 * 
 * @param {timerValue} timerValue - The value of the timer 
 * @returns A JSX object representing the footer of the application
 */
function Footer({ timerValue }) {
  return (
    <div className='footer'>
      <div className='timer-value' data-testid='timer'>{timerValue}</div>
      <button data-testid='start_buttom' >Start</button>
    </div>
  );
}

export default Footer;

Footer.PropTypes = {
  timerValue: PropTypes.number.isRequired,
};