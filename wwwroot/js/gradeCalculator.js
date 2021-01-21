//function to calculate grade
function gradeCalc() {
    //variables
    let assign = parseInt(document.getElementById("assignments").value);
    let group = parseInt(document.getElementById("group").value);
    let quizzes = parseInt(document.getElementById("quizzes").value);
    let exams = parseInt(document.getElementById("exams").value);
    let intex = parseInt(document.getElementById("intex").value);
    let totalGrade = 0;
    let letterGrade = '';


    //error checking to make sure numbers have been entered
    if (Number.isFinite(assign) === true && assign <= 100 &&
        Number.isFinite(group) === true && group <= 100
        && Number.isFinite(quizzes) === true && quizzes <= 100
        && Number.isFinite(exams) === true && exams <= 100
        && Number.isFinite(intex) === true && intex <= 100) {

        //calculating total grade
        totalGrade = assign * .5 + group * .1 + quizzes * .1 + exams * .2 + intex * .1;

        //assinging letter grade
        if (totalGrade >= 94) {
            letterGrade = 'A';
        } else if (totalGrade >= 90) {
            letterGrade = 'A-';
        } else if (totalGrade >= 87) {
            letterGrade = 'B+';
        } else if (totalGrade >= 84) {
            letterGrade = 'B';
        } else if (totalGrade >= 80) {
            letterGrade = 'B-';
        } else if (totalGrade >= 77) {
            letterGrade = 'C+';
        } else if (totalGrade >= 74) {
            letterGrade = 'C';
        } else if (totalGrade >= 70) {
            letterGrade = 'C-';
        } else if (totalGrade >= 67) {
            letterGrade = 'D+';
        } else if (totalGrade >= 64) {
            letterGrade = 'D';
        } else if (totalGrade >= 60) {
            letterGrade = 'D-';
        } else if (totalGrade < 60) {
            letterGrade = 'E';
        } 
        //alerting of final grade percentage and letter
        alert("Final Percentage: " + totalGrade + "%\n" + "Final Letter Grade: " + letterGrade);
    } else {
        //error message
        alert("Please re-enter your percentages, ensuring they are 100 or less, with no symbols");
    }
}
