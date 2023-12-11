// selecting our elements
const numberInputs = document.querySelectorAll(".number-Input");

// global veribales
let indexNum = 0;
// functions

// event linsters
numberInputs.forEach((input) => {
  input.addEventListener("input", (e: any) => {
    let numbersVal = e.target.value;
    indexNum += 1;
    if (numbersVal) {
      if (indexNum >= 5) {
        console.log("no boxes left");
      } else {
        numberInputs[indexNum].focus();
        console.log(indexNum);
      }
    }
  });
});
