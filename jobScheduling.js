const jobScheduling = function( startTime, endTime, profit ) {
  const
  const ignoredPositions = [];
  let currentPosition = 0;
  let currentProfit = 0;
  let highestProdit = 0;

  // for (let i = 0; i < startTime.length; i++) {
  //   ranges.push([ startTime[i], endTime[i] ]);
  // }

  while ( currentPosition <= startTime.length ) {

    if (startTime[currentPosition] > endTime[currentPosition - 1]) {
      currentProfit += profit( currentPosition );
    }

    if (currentPosition === startTime.length - 1) {

      while ( startTime[currentPosition] endTime[currentPosition - 1] ) {

      }
    }
    currentPosition++;
  }

};

jobScheduling( [1,2,3,3], [3,4,5,6], [50,10,40,70] );