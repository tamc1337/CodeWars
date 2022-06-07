function highAndLow(numbers){
    let newNums = numbers
    .split(" ")
    .sort((a,b) => b-a);
    return (newNums[0] + ' ' + newNums[newNums.length-1]);
  }

  // https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript 