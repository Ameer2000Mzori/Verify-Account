// selecting our elements
var numberInputs = document.querySelectorAll(".number-Input");
// global veribales
var indexNum = 0;
// functions
// event linsters
numberInputs.forEach(function (input) {
    input.addEventListener("input", function (e) {
        var numbersVal = e.target.value;
        indexNum += 1;
        if (numbersVal) {
            if (indexNum >= 5) {
                console.log("no boxes left");
            }
            else {
                numberInputs[indexNum].focus();
                console.log(indexNum);
            }
        }
    });
});
