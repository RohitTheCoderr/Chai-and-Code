
class User {
    constructor(username){
        this.username=username
    }
logMe(){
    console.log(`UserName: ${this.username}`);
}

 static createId(){
    return `123`
}
}

const rohit = new User("Rohit");
// console.log(rohit.createId());   // abi to pritn ho jayega btu jab ham es method ko static bana denge class ke andr hi to ye accesseable nhi hoga like

// ham es method ko extends class se bi access nhi kar sakte h


class childUser extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const cduser= new childUser ("Anshu", "2anshu123.com")

console.log(cduser.createId());   // ham es class se bi acees  nhi kar sakte h us static method ko


