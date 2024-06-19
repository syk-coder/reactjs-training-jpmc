class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
   stuFunc(){
    console.log("Function Called");
    console.log(this.name+' '+this.age);
   }
}
var stu = new Student('Rakesh',50);
//console.log(stu.name+' '+stu.age);
stu.stuFunc();