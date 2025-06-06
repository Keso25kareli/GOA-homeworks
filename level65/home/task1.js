function showStudent() {
    let student = {
      name: "keso",
      surname: "kareli",
      age: 17,
      isGraduated: false
    };
  
    console.log(student.name);
    console.log(student["surname"]);
    console.log(student.age);
    console.log(student["isGraduated"]);
  }
  
  showStudent(); 