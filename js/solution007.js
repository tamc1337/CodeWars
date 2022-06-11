function squareOrSquareRoot(array) {
    let finArr = [];
    for(let i=0; i<array.length;i++){
      if(Number.isInteger(array[i]**0.5)){
        finArr.push(array[i]**0.5);
      } else {
        finArr.push(array[i]**2);
      }
    }
    return finArr;  
  }

  //https://www.codewars.com/kata/57f6ad55cca6e045d2000627/javascript