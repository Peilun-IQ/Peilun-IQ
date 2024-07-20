var fortuneMessage;
var fortune = 10;
if (fortune >= 0 && fortune <= 3) {
  fortuneMessage = "You have a low fortune.";
} else if (fortune > 3 && fortune <= 7) {
  fortuneMessage = "You have an average fortune.";
} else if (fortune > 7 && fortune <= 10) {
  fortuneMessage = "You have a good fortune.";
} else {
  fortuneMessage = "The fortune can't be read correctly.";
}

// Print the fortune message to the console
console.log("Fortune:", fortune);
console.log(fortuneMessage);
