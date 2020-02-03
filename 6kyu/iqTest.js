function iqTest(numbers){
    let odd = [];
    let even = [];
    let array = [];
    array = numbers.split(' ')
    for(let element of array){
      if(element % 2 === 0){
        even.push(element)
      }
      else if(element % 2 !== 0){
        odd.push(element)
      }
    }
    if(odd.length > even.length){
      const gotcha = array.indexOf(array.find(num => num % 2 === 0))
      return gotcha + 1
    }
    else if(odd.length < even.length){
      const gotcha = array.indexOf(array.find(num => num % 2 !== 0))
      return gotcha + 1
    }
  }