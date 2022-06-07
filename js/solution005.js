// return masked string
function maskify(cc) {
    let len = cc.length-4;
    let newArr = cc.split("").splice(len);
    if(cc.length > 4){
      while(len>0){
      newArr.unshift('#');
      len--;
      };} else{
        return cc;
      }
   let finalArr = newArr.join("").toString();
    return finalArr;
  }
  

//https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript 