class Parent{
    constructor(){
        this.Fathername = "Kamruzzaman";
    }
}
    


class Child extends Parent{
    constructor(childName){
        super();                //super class means call to the parent constructor class.
        this.Childname = childName;
        
    }
    
}
const childName1 = new Child("Mow");
const childName2 = new Child("Muhib");
const childName3 = new Child("Meem");
console.log(childName1,childName2,childName3)

