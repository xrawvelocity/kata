function scrollingText(text){
    let arr = [];
    for(let letter in text){
      arr.push((text.slice(letter) + text.slice(0, letter)).toUpperCase())
    }
    return arr
  }