
function User(email, password) {
    this._email =email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email =value
        }
    })

    //  for password
    Object.defineProperty(this, 'password',{
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this.password =value
        }
    })
}

const chai = new User("rohit@gmail.com", "chai123")
console.log(chai.email);

//  NOTE:-  YE SAB CLASS BALA HI GETTER ANS SETTER FUNCTION BAS YE METHOD PAHLE USE HOTE THE BUT AB CLASS VALE BAHUT USE HOTE H KYOKI CLASS VALA THODA SYNTAX ACHHA LAGTA H USE KARNE ME BAKI KAAM DONO KA SAME HI H
// achha ye bata duu ki setter and getter ko aur bi ek tarika h jisme ham es don ko define kr sakte h ye to ham  function me ese use kiye h
//  ek aur hamare pass h jisme ham ese get and set ko Object me define kr sakte h 