const letterCombinations = (digits) => {
  if (digits.length === 0) return [];

  const combos = [];
  let letters = phoneLetters[parseInt(digits[0] - 2)].split('');

  for (let letter of letters) {
    if (digits.length > 1) {
      let subCombos = letterCombinations(digits.substring(1));
      for (let subCombo of subCombos) {
        combos.push(letter + subCombo);
      }
    } else {
      combos.push(letter);
    }
  }
  return combos;
};

const phoneLetters = [
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz'
];

console.table(
  letterCombinations('23')
);