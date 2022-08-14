function findOdd(A) {
    let arr = [];
    let sort = A.sort((a,b) => a-b);
    for(let i = 0; i<sort.length; i++){
      arr.push((sort.lastIndexOf(sort[i])-sort.indexOf(sort[i])))
    };
    
    const grabber = (array) => {
      // finds the first indexof array that has %2 === 0
      for (let j=0;j<array.length; j++){
        if (array[j]%2===0){
          return array[j]
        }
      }
    }
    let grabbed = grabber(arr);
    console.log(`the grabbed is ${grabbed}`)
    const getter = (array, indexxy) => {
      // takes the grabbed index from arr, returns the same index from sort
      let ind = arr.indexOf(indexxy);
      return array[ind];
    }
    
    
   let answer = getter(sort,grabbed)
  return answer;
  }

  // https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript 