const form = document.querySelector("form");
//  this usecase will give you empty 
//  const height = parseInt(document.querySelector("#height").value)
// console.log(form);
form.addEventListener('submit', function (e) {
    e.preventDefault()    // preventDefault() krne ka mtlb h ki ye event kahi abhi submit mat kro
   const height = parseInt(document.querySelector("#height").value)
   const weight = parseInt(document.querySelector("#weight").value)
   const results = document.querySelector("#results")

if (height ==='' || height <=0 || isNaN(height)) {
    results.innerHTML =`please give a valid height ${height}`;
}
else if (weight ==='' || weight <=0 || isNaN(weight)) {
    results.innerHTML =`please give a valid weight ${weight}`;
}
else {
    let bmi =(weight /((height*height)/10000)).toFixed(2);       // here why we use a toFixed(2) reason because we want to only to digit after . value
    // To show the result
    results.innerHTML =`<span>${bmi}</span>`;
    let para= document.createElement('p')

    if (bmi<18.6) {
        para.textContent ='You are Under Weight'
        results.appendChild(para)
    }
    else if (bmi>18.6 && bmi<24.9) {
            para.textContent ='You are Normal Range'
            results.appendChild(para)
        }
        else if (bmi>24.9){
            para.textContent ='You are Overweight'
            results.appendChild(para)
        }
    // console.log(results);
    }} )  
    // console.log(span);














