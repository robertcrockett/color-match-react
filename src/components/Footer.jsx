import PropTypes from "prop-types";

/**
 * 
 * @param {timerValue} timerValue - The value of the timer 
 * @returns A JSX object representing the footer of the application
 */
function Footer({ timerValue, onStartClick }) {
  return (
    <div className='footer'>
      <div className='timer-value' data-testid='timer'>{timerValue}</div>
      <button data-testid='start_button' onClick={() => onStartClick} >Start</button>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  timerValue: PropTypes.number.isRequired,
  onStartClick: PropTypes.func.isRequired,
};