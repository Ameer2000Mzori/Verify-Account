// selecting our elements
const numberInputs = document.querySelectorAll(".number-Input");

// global veribales

// functions

// event linsters
numberInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
});
