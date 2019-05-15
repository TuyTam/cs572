function isWeekend(){
  const todayDate = new Date();
  const day = todayDate.getDay();
  console.log("Day: " + day);
  const week = ['yes','no','no','no','no','no','yes'];
  return week[day];
}

console.log(isWeekend());