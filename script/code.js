// q1

let fullName = ('Uthmaan Samsodien')
console.log(fullName);

//q2

let firstName = ('Uthmaan')
let lastName = ('Samsodien')
let age = ('21')
let subjects = ['English, Afrikaans, Mathematics literacy, Business Studies, Economics, Visual Arts']
let address = ['19 Willow Way, Grassy Park, Cape Town, South Africa']
console.log(firstName);
console.log(lastName)
console.log(age)
console.log(subjects)
console.log(address)

//q3

// let result = document.querySelector('#Display')
// function display(value) { 
//     result.value += value;
// }

// document.querySelectorAll('.operators').forEach((ops)=>{
//     ops.addEventListener('click',(e)=>{
//         result.value += e.target.innerText
//     })
// })   
function btnResult(){
    let numb1 = + document.querySelector("#num1").value
    let operator = document.querySelector("#operator").value
    let numb2 = + document.querySelector("#num2").value
    let result = document.querySelector("#ds-answer")

    if (operator == "+"){
         result.innerText = numb1 + numb2;
    }else if (operator == "-"){
         result.innerText = numb1 - numb2;
    } else if (operator == "*"){
         result.innerText = numb1 * numb2;
    }else if (operator == "/"){
         result.innerText = numb1 / numb2;
    }
}