let currentNumber = '';
let previousNumber = '';
let op = null;
let justEval=false;

function operate(){
  let res;
  const a = parseInt(previousNumber);
  const b = parseInt(currentNumber);
    switch(op){
        case '+': res= a+b;break;
        case '-': res= a-b;break;
        case '*': res= a*b;break;
        case '/' : res= b===0?'error':a/b;break;
        default : return;
    }  
  currentNumber = res.toString();
  op = null;
  previousNumber='';
  justEval=false;
}

const nbrBtn = document.querySelectorAll('.btn');

nbrBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (justEval) {
      // ✅ Only reset if last thing was '='
      currentNumber = '';
      previousNumber = '';
      op = null;
      justEval = false;
    }
        currentNumber += button.textContent;
        updateDisplay();
    });
});

const opBtn = document.querySelectorAll('.sign');

opBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber === '') return;
        if (previousNumber !== '') operate(); 
        op = button.textContent;
        previousNumber = currentNumber;
        currentNumber = '';
        justEval=false;
        //optional : to update the result one opertion at a time 
        updateDisplay();
    });
});

calculBtn =document.querySelector('.calculate')
calculBtn.addEventListener('click', () => {
    if(!currentNumber || !previousNumber || !op){
      document.querySelector('.result').textContent = 'error';
      return;
        }
    operate();
    updateDisplay();
    justEval=true;
});

document.querySelector('.clear').addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    op = null;
    justEval=false;
    updateDisplay();
});

function updateDisplay() {
    document.querySelector('.result').textContent = currentNumber || previousNumber || '0';
}

