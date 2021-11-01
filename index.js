function scuberGreetingForFeet(ride) {
  if (ride > 2500) {
    return ("No can do.");
  } else if (ride <= 400) {
    return "This one is on me!";
  } else if(ride > 2000) {
    return "I will gladly take your thirty bucks.";
  } 
}
function ternaryCheckCity(city) {
  let cityMessage;
  (city === "NYC") ? (cityMessage = "Ok, sounds good.") : (cityMessage = "No go.");
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}