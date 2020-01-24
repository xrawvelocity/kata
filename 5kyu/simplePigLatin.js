function pigIt(str){
    let letters = [];
    let newArr = [];      
    let arr = str.concat().split(' ');
    for(let element of arr){
      letters.push(element[0])
      newArr.push(element.substr(1))
    }
    for(let i = 0; i < newArr.length; i++){
      newArr[i] += letters[i] + "ay"
    }
    newArr =newArr.join(' ');
    if(newArr.includes('!')){
      newArr = newArr.substr(0, newArr.indexOf('!') + 1);
    } else if(newArr.includes('?')){
      newArr = newArr.substr(0, newArr.indexOf('?') + 1);
    }
    return newArr;
  }