// selecting our elements
var numberInputs = document.querySelectorAll(".number-Input");
// global veribales
var indexNum = 0;
// functions
var nextEl = function (numbersVal) {
    // check if there is value.
    if (numbersVal) {
        // check if index num is greater then 5
        indexNum += 1;
        if (indexNum >= numberInputs.length) {
            console.log("no boxes left");
            numberInputs[indexNum].blur();
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
numberInputs.forEach(function (keyDowns) {
    keyDowns.addEventListener("keydown", function (e) {
        // getting keydown event
        var keyDownVal = e.key;
        // checking if user want to delete
        if (keyDownVal === "Backspace") {
            // cecking if index num is lower then 0 else keep
            for (var _i = 0, numberInputs_1 = numberInputs; _i < numberInputs_1.length; _i++) {
                var valuesOf = numberInputs_1[_i];
                if (numberInputs[indexNum] === "") {
                    console.log(valuesOf);
                    indexNum -= 1;
                    numberInputs[indexNum].focus();
                }
            }
            if (indexNum <= 0) {
                indexNum += 0;
            }
            else {
                indexNum -= 1;
            }
            numberInputs[indexNum].focus();
        }
        // nextEl(numbersVal);
    });
});
