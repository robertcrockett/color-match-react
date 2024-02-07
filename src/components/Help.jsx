import React from 'react';

/**
 *
 * @returns A JSX object representing the help text of the application
 */
function Help() {
  return (
    <div className='help' data-testid='help'>
      Pick 4 numbers that sum to the target in 15 seconds
    </div>
  );
}

export const MemoizedHelp = React.memo(Help);
