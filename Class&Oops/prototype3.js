// // let myName= 'Rohit'
// // console.log(myName.length)    // if we print this string length so output is 5
// // //  But if we add space in this string and then afetr print their length so in the output spaceses is also calculate like
// // myName = "Rohit      " 
// // console.log(myName.length);    // output is 11 
// // //  But we want to only charcter is count in this length 
// // //  so for this work 1st we can usse .trim().length like 
// //  console.log(myName.trim().length);

// //  NOTE:- but ham ye trim() word to tab use karte h jab hame ek 2 hi string ko uski tru length count karni ho but kya ho agr hmare pass ese hi abhut sare string variavle ho to kya ham sab ke liye bar bar trim().length likhte rahenge ji nhi 
// //         ham chahte h ki jaha bi yesa string ho vaha uski actule yani truelength print ya count ho to kya ham ysa kar sakte h chaliye dekhte h
// //          uske liye ham ek method banana padega uske liye hasme abhi bahut kuch samjhna padega 


// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getSpiderPower : ()=>{
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.Rohit = function () {
//     console.log(`Rohit is present in all object`)
// }
// heroPower.Rohit();

// // Object ke prototype  me ye Rohti name ka method add karne se ye na sirf herePower ke prototype me add hua balki ye ab myHeros ke me bi add ho gya Kyoki Object.prototype karne se ye globle level me add ho jati h 
// //  aur jab ye globle level me add ho hi gai h to ye sabke liye accesabl ho gya h to isliye jab ham myHerosme bi ye method find karenge to ye uske liye bi same print karke dega chaliye dekhte h like

// myHeros.Rohit();  // to dekha aapne Object me add karne se sabke liye ye accesseable ho gya h

// // NOTE:- jab ham Object ke prototype me kuch method add karte h to ye function, Array and String tino ke liye accesseable hote h but kya ho agr ham Array ke prototype me method add kare to kya Object es method ko access kar sakta h ya nhi chalye dekhte h

// Array.prototype.HeyRohit = ()=>{
//     console.log(`Rhoit says Hello`);
// }

// //  tecnically kya h  ki ye jo hamare pass ek myHeros ek array h eske pass to access hona chahiye ye heyRohit method ka like
// // myHeros.HeyRohit();
// // but ye ho object h heroPower ka kya uske pass h ye ,ethod access karne ka chaliye dekhte h
// // heroPower.HeyRohit();     // ji nhi eske pass nhi h yha ek TypeError: heroPower.HeyRohit is not a function

// // NOTE:- TO finaly hamne dekh liya h ki object me assion karne se sab ke liye accessable hote h but kisi perticular like function array string etc me assion karne se sable liye accessable nhi hote h 

// // ###  chalo ham ab thoda sa inheritance ke bare me padh lete h 

// // Inheritance

// const user ={
//     name: "Rohit",
//     email:"aa@example.com"
// }

// const Teacher= {
//     makeVideo:true
// }

// const TeacherSuppport ={
//     isAvailable:false
// }

// const TASupport ={
//     makeAssignment: 'JS assignment',
//     fullTime: true, 
//     __proto__:TeacherSuppport      // jab ham chahte h ki en dono ki properties aaps me link kr do vese abi hamne dekha harame pass protottype h but pahle ke time me ham ese karte the same es line ke tarah
// }

// Teacher.__proto__ =user  // ham esko aaps me bahar bi link kar sakte the like 

// // MODERN SYNTAX
// Object.setPrototypeOf(TeacherSuppport, Teacher)    // yani teacherSupport ki property teacher se link kr do 


// // ab ham vo kaam karte hjo ham sabse suru me karna chahte the because hamne eske bare me thoda sa jaan liya h so chlate h 

let anotherString= "ChaiAndCode       "
//  ab  hame to pata hi h ki ham kisi ke bi prptotypeme kuch bi add kar sakte h 
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherString.trueLength()
  
//  mmaan lo ab hamare pass ek aue string value h ham uski bi actual length janna chahte  h to uska bi ab esi method se dekh sakte h like 
 const mynameSring="Rohit    "
 mynameSring.trueLength()
//  ham directelly string bi check kara sakte h bina kisi variable me store karaye like 
"Anshu".trueLength()
"  Anshu   ".trueLength()
"Aryankumar    ".trueLength()

//   so aapne dekha ki kese ham sab string ke liye ek hi method create kiya aur sab me same kaam ho gya bas string ke prototype me ek method add karne se jisme hame jo kuch kaam karana ho



// // video peuse 7:45 
