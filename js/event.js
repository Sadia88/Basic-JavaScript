


// option1 
function makeRed(){
document.body.style.backgroundColor='red'
}
const red_theme=document.getElementById('red_doc')
red_theme.onclick=makeRed



// option 2
function makeBlue(){
    document.body.style.backgroundColor='blue';

}

// option 3
document.getElementById('golder-rod').addEventListener('click',function(){


    document.body.style.backgroundColor='goldenrod'
})


function after_click(){
    const after=document.getElementById("before");
    after.innerText='This is after clicked'
}

document.getElementById('update-btn').addEventListener('click',function(){
    const inputText=document.getElementById('btn-text');
    const Text=inputText.value;


    const h3=document.getElementById('displat-input');
    h3.innerText=Text
    inputText.value=''

})


const div =document.getElementById('Div')
const h2=document.createElement('h2')
h2.innerText='This is from javascript';
div.appendChild(h2)

console.log(div.getAttribute('id'));   
console.log(div.setAttribute("value","hellow"))

