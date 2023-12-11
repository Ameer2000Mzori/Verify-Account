// selecting our elements
const numberInputs: any = document.querySelectorAll(".number-Input");

// global veribales
let indexNum = 0;

// functions
const nextEl = (numbersVal) => {
  // check if there is value.
  if (numbersVal) {
    // check if index num is greater then 5
    indexNum += 1;

    //if else lader
    if (indexNum >= numberInputs.length) {
      console.log("no boxes left");
      numberInputs[indexNum].blur();
    } else {
      // else keep going
      numberInputs[indexNum].focus();
      console.log(indexNum);
    }
  }
};

// delete  / backspace function

const deleteNum = (keyDownVal) => {
  // checking if user want to delete
  if (keyDownVal === "Backspace") {
    // cecking if index num is lower then 0 else keep
    for (let valuesOf of numberInputs) {
      if (numberInputs[indexNum] === "") {
        console.log(valuesOf);
        indexNum -= 1;
        numberInputs[indexNum].focus();
      }
    }

    //if else lader
    if (indexNum <= 0) {
      indexNum += 0;
    } else {
      indexNum -= 1;
    }
    numberInputs[indexNum].focus();
  }

  // nextEl(numbersVal);
};

// event linsters
numberInputs.forEach((input) => {
  input.addEventListener("input", (e: any) => {
    let numbersVal = e.target.value;
    nextEl(numbersVal);
  });
});

numberInputs.forEach((keyDowns) => {
  keyDowns.addEventListener("keydown", (e: any) => {
    // getting keydown event
    let keyDownVal = e.key;
    deleteNum(keyDownVal);
  });
});
