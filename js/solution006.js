function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    let finalArr=[];
    
    newArr.sort((a,b) => a-b);
      for(i=0;i<newArr.length;i++){
        if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]) ||
            !finalArr.includes(newArr[i])){
          finalArr.push(newArr[i]);
        }
      }
    return finalArr;
  }
  // https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/javascript