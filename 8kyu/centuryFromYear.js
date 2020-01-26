function century(year) {
  if(year > 0 && year < 100) return 1;
  else if (year % 100 && year > 100){
    return Math.ceil(year / 100);
  } else {
    return Math.floor(year / 100);
  }
}