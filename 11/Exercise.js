var Exercise = /** @class */ (function () {
    function Exercise(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    Exercise.prototype.graduation = function (year) {
        console.log(("Graduating " + this.name + " " + year + " students"));
    };
    return Exercise;
}());
var exercise = new Exercise("Tam", "Student");
exercise.graduation(2019);
