function past(h, m, s){
    if (h<0){
     h=h*-1;
   };
    if (m<0){
     m=m*-1;
   };
    if (s<0){
     s=s*-1;
   };
    return ((((h*60)+m)*60)+s)*1000;
  }

  // https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a