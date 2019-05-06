
courseId = 0;
courseRegs = [ {'id': courseId+=1, 'name': 'Tam Phan','course': 'MWA', 'professor': 'Asaad Saad', 'grade':'90' },
    {'id': courseId+=1, 'name': 'Tam Phan','course': 'WAP', 'professor': 'Asaad Saad', 'grade':'95' }];


var getGrade = async function(id) {

    try {
        for (let i = 0; i < courseRegs.length; i++) {
            let course = courseRegs[i];
            if (course.id == id) {
                return course;
            }
        }
        return null;
    }catch(err){
        return Promise.reject(err);
    }
}

var getGrades = async function() {

    try {
        return courseRegs;
    }catch(err){
        return Promise.reject(err);
    }
}

var createGrade = async function(course) {

    try {
        course.id =  courseId +=1;
        courseRegs[courseId - 1] = course;
        return courseRegs;
    }catch(err){
        return Promise.reject(err);
    }
}

var updateGrade = async function(course) {

    try {
        courseRegs[course.id - 1] = course;
        return courseRegs;
    }catch(err){
        return Promise.reject(err);
    }
}

var deleteGrade = async function(course) {

    try {
        courseRegs[course.id - 1] = null;
        return courseRegs;
    }catch(err){
        return Promise.reject(err);
    }
}


module.exports =  { 'getGrade':getGrade,
    'getGrades': getGrades,
    'createGrade': createGrade,
    'updateGrade': updateGrade,
    'deleteGrade': deleteGrade};