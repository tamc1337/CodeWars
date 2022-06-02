function abbrevName(name){
    let initials= name.split(" ");
    let arr=[];
    let holdThis1 = [];
    let holdThis2 = [];
    holdThis1.push(...initials[0]);
    holdThis2.push(...initials[1]);
    arr.push(holdThis1[0].toUpperCase(),holdThis2[0].toUpperCase());
    let final = arr.join(".");
    return final;
    }