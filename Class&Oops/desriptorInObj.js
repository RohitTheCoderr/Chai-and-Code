
// console.log(Math.PI);  // jb hamne math.PI ki value check ki to 3.1415... aa rhi h but 
// Math.PI= 5;            // but ham chahte ki Pi ki value 5 ho jaye 
// console.log(Math.PI);  // ab fir se pi ki value print karayi to ye kya ye to same aa rhi h esa kyo ye check kyo nhi ho rhe h agr hamne chenge karni ho o kese karenge just for exampe ke liye

// hamare pass ek property hoti h for check kerne ke liye ki ham esa kyo nhi kar sakte h 
// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
//  ab aap console me dekhe ki ye eski value fixed kar rakhi h and ye writeable bi nhi h yani (false) ham esme value change nhi kr sakte h aur bhi kuch property h 

//  esi se ek saval aata h ki ham bhi kuch esa hi harable code vbana sakte h ki koi bi esi tarah value ko change nhi kar sakte 
    // ans is yes ham bi kuch esa hi hard code bana sakte h jisse kon uski value ko change nhi kar sakte h like

    // const myObj = {
    //     name:"ginger chai",
    //     price: 250, 
    //     isAvailable: true
    // }

    // ab ham eski descriptor dekhe to kya dikhta h sidhe log kara ke dekh lete h 
    // console.log(Object.getOwnPropertyDescriptor(myObj, "name"));
    // output me dekhe {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true }
//   sab true true pritn hua h yani abhi ham esme kuch bi change kar skate  h ab ham hard code kese banaye ki eski value ko koichange na kar paye  

// Object.defineProperty(myObj, 'name', {
//     writable: false,
//     enumerable: false    // ham do hi property ko hard banate h
// })
// // ab ham eski descriptor ko dekhte h ki ye hard code bana ya nhi 
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

//  ab  dekhe ki ye writeable false ho gye h ab eski value ko koi chnage nhi kar skate h 

//  aap dekhe ki hamne myObj ke name me enumerable bi false kar rakhi h 
//  esse phale ham apna hard code ko commentout karte h and pahle us pr for of loop laga kar dekhte h 
//  yani ham same code yaha fir se use karte h upar ka sab commentout kar dete h 
// const myObj = {
//     name:"ginger chai",
//     price: 250, 
//     isAvailable: true, 

//     orderchai: function () {   // ye key and function ko line no 61 to 61+ samjhne ke liye h usse pahle eska kaam nhi h 
//         console.log("chai is not ready");
//     }
// }
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// for (let [key, value] of myObj)  // hamne yha objectName direct le liya to kya ye kaaam karega chaliye dekh lete h log kara ke   
// {
//     console.log(`${key}, ${value}`);     // output=> myObj is not iterable ye directelly use nhi kr sakte h kyoki ye Object h but agr aapko es tarah se object ko iterate karna ho to aap ek Object.entries(nameofobject) keyword hoti h iski help se ye kr sakte h eske ander jitne bi entries hoti h vo ek ek karke iterate hoti jayegi 
// }

// for (let [key, value] of Object.entries(myObj)) 
// {
//     console.log(`${key}, ${value}`); 
// }
//  note dekhe ki es object me jitne bi key value h vo aa rhe h but jab ham esi myObj object me key me function pass kar de to kya hoga to kya ye code fat jayega 
//  ab ham code run karte h to key me pura ka pura function aa rha h but  hamne to uski value chahiye thi use rokne ke liyeham if condition laga sakte h like
// for (let [key, value] of Object.entries(myObj)) 
// {
//     if (typeof value !== "function") {    //  esse kya hoga ki ab agr jis key me function ho vo print nhi hoga 
//         console.log(`${key}, ${value}`); 
//     }
// }

// NOTE:- AB HAM MAIN MUDDE PAR AATE H AB KYA HO AGR HAM KISI KEY:VALUE PR DESCRIPTOR PROPERTY LAGA DO YANI writeable, enumerable etc laga do to yanib hard code bana do to kya ham us pr bi ye for of loop laga sakte h ans=> ji nhi chakliye dekhte h kar ke 
// uper ka sab code comment karte h 
const myObj = {
    name:"ginger chai",
    price: 250, 
    isAvailable: true, 

    orderchai: function () {  
        console.log("chai is not ready");
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj, "name"));
//  yha hamne descriptor kiya h name key me
Object.defineProperty(myObj, 'name', {
    // writable: false,    // abi ke liye ham ese comment kr dete h sirf enumerable me false karte h 
    enumerable: false   // agr ham jaise hi eski value true kar dete h to ye iteratable hoga 
   
})

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (let [key, value] of Object.entries(myObj)) 
{
    if (typeof value !== "function") {    //  esse kya hoga ki ab agr jis key me function ho vo print nhi hoga 
        console.log(`${key}, ${value}`); 
    }
}

// ab aap dekhe ki ye name key nad value ko for loop me print kr hi nhi rha h 
//  //  eske ander iteratable property bi hoti h eske ander jisse ham iteratable rok bi sakte h

// video pause 9:10  