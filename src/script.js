// selecting our elements
var numberInputs = document.querySelectorAll(".number-Input");
// global veribales
// functions
// event linsters
numberInputs.forEach(function (input) {
    input.addEventListener("input", function (e) {
        console.log(e.target.value);
    });
});
