const User = {
    _email: "rohit@gmail.com",
    _password : "abc123",
//  hamne email and password bana liye h but mai nhi chahta hu ki ye email and password ko koi bi accesse  kar le usi ke liye ham getter and setter banane padenge 

    get email(){
        return this._email.toUpperCase()
    },

    set email (value){
this._email =value
    }
}

const tea = Object.create(User) 

console.log(tea.email);