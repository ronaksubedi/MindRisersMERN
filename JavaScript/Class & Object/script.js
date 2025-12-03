const student = {
  name: "Ronak Subedi",
  age: 21,
  marks: 98,
  isPassed: true,
  printMarks: function () {
    console.log("marks:", this.marks);
  },
};
console.log("Full Student Object:", student);

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
student.printMarks();
