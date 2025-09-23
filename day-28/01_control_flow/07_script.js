// chaining of map and filter

const students = [
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 60 },
    { name: 'David', score: 35 },
    { name: 'Eve', score: 70 }
];

console.log('-:using spread operator:-')
{
    const passedWithBonus = students
    .filter(student => student.score >= 50)
    .map(student => ({...student, score: student.score + 5 })); // (...) is spread operator and it is used to copy all properties of student object into new object.
    // like this we can add new properties or modify existing properties without changing the original object.
    // if we dont use spread operator then it will return previous object inside new object like this {student: {name: 'Bob', score: 55}, score: 60}
    
    console.log(passedWithBonus);
}

console.log('\n\n-:without using spread operator:-')
{
    const passedWithBonus = students
        .filter(student => student.score >= 50)
        .map(student => ({student, score: student.score + 5 }));

    console.log(passedWithBonus);
}

// What is the Spread Operator (...)?
// The spread operator (...) is a feature in JavaScript that allows you to copy or spread the properties of an object (or elements of an array) into another object or array.

// How Does (...student) Work?
// In your case, (...student) is used inside an object literal. It "spreads" all the properties of the (student) object into a new object. This is a convenient way to make a copy of the (student) object and then modify or add properties without changing the original object.

// Let's Break Down the Code:
// .map(student => ({ ...student, score: student.score + 5 }))

// 1. { ...student }: This part creates a new object and copies all the properties of student into it. So if the student object looks like this:

// { name: 'Bob', score: 55 }
// Then { ...student } will result in a new object:
// { name: 'Bob', score: 55 }

// 2. score: student.score + 5: After copying all the properties from student, this part overwrites the score property of the new object, adding 5 to the original score. So if student.score is 55, it will become 55 + 5 = 60.

// 3. Final result: The map method creates a new array of student objects where the score has been incremented by 5, without modifying the original students array.