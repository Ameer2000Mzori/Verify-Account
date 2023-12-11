// selecting our elements
const numberInputs: any = document.querySelectorAll(".number-Input");

// global veribales
let indexNum = 0;

// functions
const nextEl = (numbersVal) => {
  indexNum += 1;
  if (numbersVal) {
    if (indexNum >= 5) {
      console.log("no boxes left");
    } else {
      numberInputs[indexNum].focus();
      console.log(indexNum);
    }
  }
};

// event linsters
numberInputs.forEach((input) => {
  input.addEventListener("input", (e: any) => {
    let numbersVal = e.target.value;
    nextEl(numbersVal);
  });
});
