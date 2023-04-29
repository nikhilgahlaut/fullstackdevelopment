function Student(name){
    this.name = name
  }
  
  Student.prototype.printDetails = function(){
    return `hello, my name is ${this.name}`
  }
  
  const student = new Student(`nikhil`)
  console.log(student.printDetails())