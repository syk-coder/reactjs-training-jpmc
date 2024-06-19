//Class expression
var Student = class{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
var stu = new Student('Amit',28);
console.log(stu.name+' '+stu.age);