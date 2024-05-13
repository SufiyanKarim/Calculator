let inputResult = document.getElementById("search-box");
let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset-btn");
let deleteBtn = document.querySelector(".del-btn");
let displayBtn = document.querySelectorAll(".displayBtn");
let equalBtn = document.querySelector('.equal-btn')
let theme = document.getElementsByName('theme');
let inputText = "";
let operators = ["+", "-", "/", "x", "%"];


displayBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (operators.includes(inputText[inputText.length - 1])){
      if (!operators.includes(button.textContent)) {
        inputText += button.textContent;
        inputResult.value = inputText;
      }
    } else {
        inputText += button.textContent;
        inputResult.value = inputText;
      }
  });
});

deleteBtn.addEventListener('click',()=>{
   if(inputResult.value.length>0){
    inputText =inputText.slice(0,inputText.length - 1);
    inputResult.value = inputText
   }  
})

resetBtn.addEventListener('click',()=>{
   inputText = ''
   inputResult.value =''
})

equalBtn.addEventListener('click',()=>{
    const outPut = eval(inputText);
    inputResult.value = ''
    inputText = '';
    inputResult.value = outPut;
    inputText = String(outPut)
})

theme.forEach(item =>{
    
   const first = document.getElementById('first');
   const second = document.getElementById('second');
   const third = document.getElementById('third');
   item.addEventListener('click',()=>{
    if(first===item){
        document.body.style.backgroundColor = '#3b4664'
    }else if(second===item){
        document.body.style.backgroundColor = '#A79277'
    }else{
        document.body.style.backgroundColor = '#BACD92'       
    }
   })
   
})










