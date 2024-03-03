
const body =document.body      // body ho we can select directely like this 
const buttons= document.querySelectorAll(".button")
console.log(buttons);
// const button1 =buttons.querySelector("")
buttons.forEach(function(button) {
    console.log(button);
    // button.computedStyleMap.back
    button.addEventListener('click', function rohit(e) {
        // console.log(e);
        console.log(e.target);
        if (e.target.id==='box1') {
        body.style.backgroundColor ='gray';
        
        }
        if (e.target.id==='box2') {
            body.style.backgroundColor ='white';
        }
        if (e.target.id==='box3') {
            body.style.backgroundColor ='blue';
        }
        if (e.target.id==='box4') {
            body.style.backgroundColor ="yellow";
        }
    });
});


