class User {
    constructor(email, password)
    {
        this.email=email;
        this.password= password
    }

    // note:- jab ham kisi value ko get karna chahte h to hame us value ko set bi karna padega get and set dono karne padenge
get password(){    // aapko get and set ke time jisme bi get and set laga rge h uska name same hona chahiye yaha
    return `${this._password}rohit`   // hamne yha password me _ lagya h agr nhi lagate h to jab ye constructor ko call karega fir dekhega ki constructor me bi this.passwod ho rha h aur esme bi fir ye confuse ho jayegaki kisme this.password set kare isliye jab ham get and set karte h to us time us value me _ use kar lete h 
                                      // and hamne bas vese hi esme ek string rohit add kar diya ki jab koi user password acces karega to use password me rohit add ho kar mile 
}

set password(value){
    this._password = value
}
//  ham kisi par biget and set laga sakte h 
// esi tarah ham email par lagate h 

get email(){
    return this._email.toUpperCase();
}

set email(emailValue){
    this._email =emailValue
}

}

const Rohit =new User("examplerohit8131@gmail.com", "123")
console.log(Rohit.password);
console.log(Rohit.email);



