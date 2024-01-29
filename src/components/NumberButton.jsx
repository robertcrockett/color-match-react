/**
 * 
 * @param {number} number - The number to be displayed on the button 
 * @returns A JSX button object representing a number button
 */
function NumberButton({ number }) {
  return <div className='number' data-testid='numberButton'>{number}</div>;
}

export default NumberButton;
