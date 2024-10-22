// chaining of map and filter

const students = [
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 60 },
    { name: 'David', score: 35 },
    { name: 'Eve', score: 70 }
];
const passedWithBonus = students
    .filter(student => student.score >= 50)
    .map(student => ({ ...student, score: student.score + 5 }));

console.log(passedWithBonus);