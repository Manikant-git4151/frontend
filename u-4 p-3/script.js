var student = {
    name: "Rahul Sharma",
    age: 20,
    course: "Web Development",
    marks: [78, 85, 90]
};


var { name, age, course, marks } = student;


var getAverage = (arr) => {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
};


var newMarks = [...marks, 88];


var avg = getAverage(marks);


var output = document.getElementById("output");

output.innerHTML = `
    <p>Student Name: ${name}</p>
    <p>Course: ${course}</p>
    <p>Marks: ${marks}</p>
    <p>Updated Marks: ${newMarks}</p>
    <p>Average Marks: ${avg}</p>
`;