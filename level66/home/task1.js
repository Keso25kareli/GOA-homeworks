function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  
    this.introduce = function() {
      console.log("მე ვარ " + this.name + ", " + this.age + " წლის " + this.job);
    };
  }
  
  let k = new Person("კესო", 14, "მოსწავლე");
  k.introduce();