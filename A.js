let Data = "Secret information";
class user{
 constructor(name,email){
    this.name=name;
    this.email=email;
 }
    viewData(){
console.log("Data:",Data);
    }
} 
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="Some new value";
    }
}

let student1= new user("Praveen Singh","ABC@gmail.com");
let student2= new user("Rajbir Singh","ppf@gmail.com");
let admin1= new admin("Admin","Admin@gmail.com");