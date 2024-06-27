// const student={
//     FullName:"Praveen Singh Kuntia",
//     Marks:94.7,
//     printMarks: function(){
//         console.log("Marks:",this.Marks)//student.Markd
//     },
// };

//Object

// const employee={
//     calTax(){
//         console.log("Tax rate is 10% ",this.salary*10/100);
//     },
// };

// const karan={
//     salary:50000,
// };
// const karan2={
//     salary:70000,
//     calTax(){
//         console.log("Tax rate is 20% ",this.salary*20/100);
//     },
// };

// karan.__proto__=employee;
// karan2.__proto__=employee;


// Class

// class Cars{
//     constructor(){
//         console.log("Creating new Object");
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brandName= brand;
//     }
// }
// let fortuner=new Cars();
// fortuner.setBrand("Fortuner");
// let lexus=new Cars();
// lexus.setBrand("Lexus");


// Constructor

// class Cars{
//     constructor(brand,mileage){
//         console.log("Creating new Object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brandName= brand;
//     }
// }
// let fortuner=new Cars("Fortuner",10);//constructor
// console.log(fortuner);
// let lexus=new Cars("Lexus",15);//constructor
// console.log(lexus);



// Inheritance

class parent{
    hello(){
        console.log("Hello");
    }
}
class child extends parent{}
let obj=new child();


// 
class person{
    constructor(name){
        console.log("Enter Person Contructor");
        this.species="Homo Sapiens";
        this.name=name;
    }
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Does Nothing");
    }
}
class engineer extends person{
    constructor(name){
        console.log("Enter child constructor");
        super(name);//to invoke parent class constructor
        console.log("Exit Child Constructor");
    }
    work(){
        super.eat();
        console.log("Solves Problems and build something");
    }
}
class doctor{
work(){
    console.log("Treat Patients");
}
}
let praveen=new engineer("Praveen Singh Kuntia");
let saurabh=new doctor();