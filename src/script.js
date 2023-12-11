// selecting our elements
var numberInputs = document.querySelectorAll(".number-Input");
// global veribales
var indexNum = 0;
// functions
var nextEl = function (numbersVal) {
    indexNum += 1;
    // check if there is value.
    if (numbersVal) {
        // check if index num is greater then 5
        if (indexNum >= numberInputs.length) {
            console.log("no boxes left");
        }
        else {
            // else keep going
            numberInputs[indexNum].focus();
            console.log(indexNum);
        }
    }
};
// event linsters
numberInputs.forEach(function (input) {
    input.addEventListener("input", function (e) {
        var numbersVal = e.target.value;
        nextEl(numbersVal);
    });
});
