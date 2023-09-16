// Challange Link: https://www.hackerrank.com/challenges/grading/problem
"use strict";

const findNearstMultipleOfFive = (num) => {
    for(let i = 0; i <= 5; i++) if((num + i) % 5 == 0) return num + i;
};

const gradingStudent = function(grade) {
    if(grade < 38) return grade;    
    let nearstMultipleOfFive = findNearstMultipleOfFive(grade);
    if(nearstMultipleOfFive - grade < 3) return nearstMultipleOfFive;
    else return grade;
};

const gradingStudents = function(grades) {
    const finalGrades = [];
    for(const grade of grades) finalGrades.push(gradingStudent(grade));
    return finalGrades;
};