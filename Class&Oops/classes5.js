// ES6   ye sab ab aap ES6 ke bad hi kar rhe h 

//  class

// class user {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password =password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user("rohit", "rohit@kumar.com", 12345)

// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

//  ye same pahle vala topic prototype jaisa kaam  karte h like aaiye dekhte h ye behind the scene same hote h  

// Behind the scene

function user(username, email, password) {
    this.username = username;
        this.email = email;
        this.password =password;
    
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}


const user2 = new user("rohit", "rohit@kumar.com", 12345)

console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUserName());

// so aapne dekha ki ye kaam ham class se bi kar sakte h kaam vahi hoga 
