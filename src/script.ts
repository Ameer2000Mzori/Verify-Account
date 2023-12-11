// selecting our elements
const numberInputs: any = document.querySelectorAll(".number-Input");

// global veribales
let indexNum = 0;

// functions
const nextEl = (numbersVal) => {
  indexNum += 1;
  // check if there is value.
  if (numbersVal) {
    // check if index num is greater then 5
    if (indexNum >= numberInputs.length) {
      console.log("no boxes left");
    } else {
      // else keep going
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
