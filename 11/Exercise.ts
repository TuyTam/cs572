class Exercise {

    constructor(public name: string, public dept: string){

    }

    graduation(year: number){
        console.log((`Graduating ${this.name} ${year} students`));
    }
}

var exercise = new Exercise("Tam", "Student");
exercise.graduation(2019);

