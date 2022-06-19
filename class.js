class Student{
    constructor(sID,sName){  //using constructor also it's parameter::
        this.id = sID;
        this.name = sName;
        this.schoolName = "Kalaroa Pilot High School";
    }
    

}
const student1 = new Student(2,"Hasan");
const student2 = new Student(3,"Rifat");
console.log(student1,student2);

console.log(student1.name);
