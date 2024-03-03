// <!-- Promise  -->
// <!-- The promise object represents the eventual completion (or failure) of an asynchronous opration and its resulting value. -->
// <!--  A promise is a proxy foe a value not necessarily known when the promise is created. It allows you to associate handlers
//     with an asychronous action's eventual success value or failure reasn. This lets asychronous methods return values like
//     sychronous methods: Instead of immediately returing the final value, the asychronous method returns a promise to supply
//     the value at sme pint in the future.
//  -->

// NOTE:- before consume promise, we learn how to create promise like

// const promiseOne = new Promise(function(resolve, reject){
//     // DO an async task
//     // DB calls, crytography, network
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);

// })

// promiseOne.then(function () {
//     console.log("promise consumed");

// })

// // same work done here like uper promise
// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task2 ");
//         resolve()
//     },1000)
// }).then(()=>{console.log("Async task 2 resolve");})

// const promisethree = new Promise((resolve, reject)=>{
//     setTimeout(function() {
//        resolve({userName:"RohitTheCoderr", email:"aakumar@gmail.com"})
//     }, 1000)
// })

// promisethree.then((user)=>{
//     console.log(user);
// })

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      // !error  ka matlab agar error na ho to if condition chalega. error = false h to eoor nahi h jab ye if chalega but jab error true hua to else chalega
      resolve({ userName: "rohitthecoderr", passward: "123" });
    } else {
      reject("'ERROR', something went wrong")
    }
  }, 2000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {     // jo bi usper se retrn aa rhi h reject me use error me store kara lete he fir nest line me use console.log kara letee h 
    console.log(error);
    console.log("hello rejected called");
  })
  .finally(() => console.log("The promise is either resolved ro rejected"));

//   NOTE:-   finally callback:- Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

const promiseFive= new Promise((resolve,reject)=>{
  setTimeout(function () {
        let error = true;
        if (!error) {
          // !error  ka matlab agar error na ho to if condition chalega. error = false h to eoor nahi h jab ye if chalega but jab error true hua to else chalega
          resolve({ userName: "JavaScript", passward: "js@123" });
        } else {
          reject("'ERROR', js went wrong")
        }
      }, 1000);
})

// NOTE:- we can use async function in place of .then for callback of Promise

// async function consumePromiseFive() {
//  const response=  await promiseFive
//  console.log(response);
// }

// consumePromiseFive()

// but when we want to consume both resolve and reject then we use try and catch in async function like below
async function consumePromiseFive() {
 try {
  const response=  await promiseFive
 console.log(response);
 } catch (error) {
  console.log(error);
 }
}
                    
consumePromiseFive()

//    https://jsonplaceholder.typicode.cpm\users


// async function getAllUsers() {
//  try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')     // jahir si bat h fetch bhi ek network request h to time to lagega time lagega to hame wait karna padega isliye ese await me lena padega
//   console.log(response);  // aap dekh sakte h ki jab ham response ko print kara rhe to response me jo data aana tha vo aa rhe h but

// // const data= response.json();   // but jab ham esi response ko json me convert kiya aur use print kiya to vo pending me show ker rha h esa isloye ho rha h kyoki ye chij bi aane me kuch time leta h isliye hame ese bi await me dalna padega 
// const data = await response.json();   // ab hamara data aa raha h 
// console.log(data)
//  } catch (error) {
//   console.log("ERROR, error hai")
//  }

// }
// getAllUsers()

// if we want to same in then and catch so how we can do it lets go

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return  response.json()    // here hamne return to kar di h json me but ese store bi to to karna padega kisi me esliye hamne ek aur then use kr liya
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>
  console.log(err)
)

//  in case of then we no need to use await keyword because we know that  then one by one execute hote h so await krne ki jaruart hi nhi h 
//  and hamne directelly data ko fetch kiya h os isliye ese call karne ke bi jarurat nhi h

// ### ABOUT fetch method
// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.