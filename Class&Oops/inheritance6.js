// inheritance

class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)    // jaisa ki hamne padha tha call4.js me ki kaise ham ek function ke argument ko dusre function me le aur vo function call bi ho jaye vahi kaam yha ho rhe h with super keywprd use karne se super keyword use karne se class user ke consctructor ko call kar deta h and yha se username ki value us ke parameter me pass karte h 

        this.email =email;
        this.password =password
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`);
    }
}

const chai= new Teacher("Rohit", "Rohit@123.com", "rohit2323")
const tea =new user("Aryan", "aryan@1213.com", "1213");

console.log(chai);
chai.addCourse()

// note:- yha user ek paernt class h and teacher ke child class h 
//  ek parent class apne child class ko access nhi kar sakte yani child class ke method ko access nhi kar sakte but ek child class paretn class ke method ko access kr sakte h like 
// aap dekhe ki logMe method parent class ke ander h isliye logMe ko dono access kar sakte h 
tea.logMe()
chai.logMe()
// but aadcourse method sirf child class me h isliye es method ko sirf child class hi access kar sakte h 
chai.addCourse()
// but jab ham try krte h parent class se access karne ki to kya output aata h 
tea.addCourse()
// OUTPUT:- TypeError: tea.addCourse is not a function 



// video pause 8:30 

