// ### Object Literal

// const user= {
//     userName: "Rohit",
//     loginCount: 8,
//     signId: true,

//     getUserDetails: ()=>{ 
//         // console.log("Get user details from database");
//         // console.log(`username: ${userName}`);     // here occure => ReferenceError: userName is not defined
//        console.log(`UserName: ${this.userName}`);    // es error se bachne ke liye ham this keyword lagana padta h 
//        console.log(this);   // if we print this here so that output is user objecct
  
//     }
// }

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);    // but we print here of this value so that output is {} empty object  


// NOTE:-  ab maan lo hame ese hi aur user banane ho to kua ham fir se user2 banayenge jisme same value hogi uska name loginId etc 
//        ji nahi ek do user banane ke liye to chal jayega but jab hame ese hi bhaut sari user ki need hogi to kya krrenge ham bar bar to sab user ke liye object to nhi bana sakte h na  isliye ham ek constructor hi bana kete h 

// ### constructor
// const promiseOne = new Promise()
// const date= new Date()

// function user(username, loginCount, isloginId) {
//     this.username =username;
//     this.loginCount=loginCount;
//     this.isloginId= isloginId

//     return this;   // new keyword use ke bad ham ese this ko return kra bi sakte h aur na bi but hame return kara chahiye taki pata chale code me ho kya rha h 
// }

// const userOne= user("Rohit", 10, true)
// const userTwo = user("aryan", 11, false)   // ab kya hoga jab ham userTwo ki value ko user me dala h to aur ab kya hoga jab ham userOne ko print kre to  
// console.log(userOne)   // ye kya jab ham userOne ko print kr rhe to ye to userTwo ki value print ho rha h
// console.log(userTwo)   // chalo ab ham userTwo ko print kr ke dekkhte h are ye to to thik h but pichli value ko hata diya h 
// but esse to hamara kaam nhi hoga ye to hamara kaam hi bigad de rha h 
// esi ko dur karne ke liye ham new keyword use krte h jisse ham ek ke liye new instance mil jata h like
// const userOne= new user("Rohit", 10, true)
// const userTwo = new user("aryan", 11, false) 
// console.log(userTwo)
// console.log(userOne)

// NOTE:- when we use new keyword then in the function we not a need for return this but its good to return this 

// jab ham new keyword use karte h to ek object banta h 
//  aur sath me ek constructor function call hota h

// esme ham ye sab properties likhe h but esa nhi h ki ham sirf esme properties hi likhe ham esme method bi bana sakte h like 
function user(username, loginCount, isloginId) {
    this.username =username;
    this.loginCount=loginCount;
    this.isloginId= isloginId

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
    }
    return this;   // new keyword use ke bad ham ese this ko return kra bi sakte h aur na bi but hame return kara chahiye taki pata chale code me ho kya rha h 
}

// ab ham esme value dal ke function ko call karte h  and jab ese print karte h to us method bi print ho rha h 
const userOne= new user("Rohit", 10, true)
const userTwo = new user("aryan", 11, false) 
// console.log(userOne)  
// console.log(userTwo)  

// actully ab bat kya aati h constructor ki kya esme constructor hoti h agr hoti h to kya mai use dekh sakte h kya chalo dekhte h try kr ke
console.log(userOne.constructor);   // aap dekhe ki ye to ek function print ho rha h and ye function aur kuch nhi balki khud hi ek function hoti h 
//  constructor aur kuch nhi balki khud ki hi reference hoti h 

// Note yaha aap ye bi dekh sakte h ki ye jo userOne anr UserTwo alag alag h kya? eske liye ek oprator hota h instanceof
console.log(userOne instanceof user);  
console.log(userTwo instanceof Object);    // aap yha object bi likh sakte  h kyoki user ko hamne new keyword laga kar ek object create kar di isliye


// NOTE:- achha aapko bata de ki yha bahut sara encapsulation, abstraction  

