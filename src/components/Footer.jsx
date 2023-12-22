function Footer({ timerValue }) {
  return (
    <div className='footer'>
      <div className='timer-value'>{timerValue}</div>
      <button>Start</button>
    </div>
  );
}

export default Footer;
