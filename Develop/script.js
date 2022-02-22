var today = moment();
$("#currentDay").text(today.format("LLLL"));

var time = (new Date()).getHours();

// stackoverflow guy showed me this ternary to make the code shorter

$(".description").addClass(function () {
    return +this.id === time ? "present" : +this.id < time ? "past" : "future";
});

// original code before using the ternary from stackoverflow
// $(".description").addClass(function () {
//     if (this.id == time) {
//         $(this).addClass("present");
//     }
//     else if (this.id < time) {
//         $(this).addClass("past");
//     }
//     else {
//         $(this).addClass("future")
//     }
// });

var text = $(".description")

localStorage.setItem('text', JSON.stringify(text));

var display = localStorage.getItem("text");

var item = localStorage.getItem("text");