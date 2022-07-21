const equalPartition = ( nums ) => {
  const combos = allCombos( nums );
  let array1, array2, array1sum, array2sum;

  for (let combo of combos) {
    for ( let i = 0; i < combo.length - 1; i++ ) {
      array1 = combo.slice(0, i + 1);
      array2 = combo.slice(i + 1);
      array1sum = array1.reduce((previous, current) => previous + current);
      array2sum = array2.reduce((previous, current) => previous + current);
      if ( array1sum === array2sum ) return true;
    }
  }
  return false;
};

const allCombos = ( nums ) => {
  if ( nums.length === 1 ) return [nums[0]];
  if ( nums.length === 2 ) {
    return [[ nums[0], nums[1] ], [ nums[1], nums[0] ]];
  }
  const combos = [];
  let firstNum, remainingNums, smallCombos;

  for ( let i = 0; i < nums.length; i++ ) {
    firstNum = [ nums[i] ];
    remainingNums = [...nums];
    remainingNums.splice(i, 1);

    smallCombos = allCombos( remainingNums );
    for (let smallCombo of smallCombos) {
      combos.push(firstNum.concat(smallCombo));
    }
  }
  return combos;
}

console.log(
equalPartition( [ 1, 5, 11, 5 ] ), // true
equalPartition( [ 1, 2, 3, 5 ] )  // false
)