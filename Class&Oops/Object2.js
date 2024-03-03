// function multiplyBy5(num) {
//     return num*5
// }

// multiplyBy5.power =2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);  // ye sirf ek prototype hi nhi h valki eske andr  bahut sari function properties inject h 


function createUser(username, score) {
    this.username=username;
    this.score=score
} 
//  jaise ki pata h ki function, array and string ye tino hi ek object h 
//  to kya ham es function ke prototype me ham apna function inject(declare kr skte ?) kara sakte h chaliye dekhte h 
//  kyoki prototype me bi to pahle se hi bahut sari properties hoti h and uske ander function hoti h to chaliye ab apna kuch properties and uski value ek function declare kar ke dekhte h 
createUser.prototype.increment = function(){
this.score++;       // but ab yha ek problem h ki ye score++ karega kis user ka ye bi to ek problem  ki ye kis user ka score me increment kre user1 ka ya user2 ka ya aur bi kisi ka. to ese problem ko dur krne ke liye ham esme this keyword use karte h 
}

//  esi tarah ab ham ek aur method create kar leta hu yani inject kar deta hu 
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

//  jab ham es createUser ke function ke prototype me ja kar dekhte h to uske andr ye dono properties aai h 
//  but jab ham es createUser function se user1 me value pass karai h to aap aapne use bataya nhi ki aapke pass 2 aditional properties aai h actully ye batana padega usi ke liye ham esme new keyword lagate h jaise hi ham esme new keyword lagate h to ab ese pata h ki hame kya kya kaam karna h  
const user1= new createUser("rohit", 2000)
const user2= new createUser("Anshu", 1000)
// console.log(user1)
user1.printMe()


// SPECIAL NOTE:- FOR READING
/* 
Here's What happens behind the scene when the new keyword is used: ? 

A new Object is created: the new keyword initiates the creation of a new JAvaScript object.

A prototype is linked: The newly created object gets linked to the 
prototype property of the constructon function. This menas that it has access to properties
and methods define on the constructor's prototype.

The constructor is called: The constructor fucntion is called with the specified argument
and this is bound to the newly create object. If no explicit return value is specified from 
the constructor, JavaScript assumes this, the newly create object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned. 

*/

