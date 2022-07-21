var sortColors = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          nums.splice(i, 1);
          nums.unshift(0);
      } else if (nums[i] === 2) {
          nums.splice(i, 1);
          nums.push(2);
          while (true) {
            if (nums[i] === undefined) return nums;
            if (nums[i] !== 2) break;
            nums.splice(i, 1);
            nums.push(2);
            if (nums[i] !== 2) break;
            i++;
          }
          i--;
      }
  }
  return nums;
};

console.log(
    sortColors([2,2,1])
);