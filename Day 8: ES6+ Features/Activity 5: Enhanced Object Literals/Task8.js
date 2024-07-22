const school = {
  name: "School",
  students: [],
  addStudent: function (student) {
    this.students.push(student);
    this.length++;
  },
  removeStudent: function (student) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
    this.length--;
  },
  printStudents: function () {
    this.students.forEach(function (student) {
      console.log(student);
    });
  },
  length: 0,
};
console.log(school.length); // 0
school.addStudent("John");
school.addStudent("Jane");
school.addStudent("Jack");
console.log(school.length); // 3
school.removeStudent("Jane");
console.log(school.length); // 2
school.printStudents(); // John, Jack
