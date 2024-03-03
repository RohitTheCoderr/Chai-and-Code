
function SetUserName(username) {
    // complex Db calls
    this.username=username;
    console.log("colled");
}

function createUser(username, email, password){
// SetUserName(username);   // aaapko lag rha hoga ki uapr jo function h vo yha se call ho ja rha hoga ha ye bat to y thik h kiye call ho rha but ye function call hote hi globle content se remove ho ja rha h jisse esme value pass nhi ho rhi h actul me call karne ke liye hame yha functionname.call lagana padega tab ja kar ye call hoga aur sath me yha se hame jo bhi argument pass ki h ye to es function ka agrument h na isliye us function me parametter pass ke lite this lagana padega like next line dekhe  
SetUserName.call(this,username);

this.email =email;
this.password=password;

}

const user1= new createUser("Rohit", "Email@com", 12345678)
console.log(user1);