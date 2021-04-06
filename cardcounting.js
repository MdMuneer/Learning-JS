var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:  
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "K":
    case "Q":
    case "A":
      count--;
      break;
  }

  var Holdbet ='Hold'
  if (count > 0){
    Holdbet ='Bet'
  }
  return count + " " + Holdbet;

}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(2))