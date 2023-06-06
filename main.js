document.addEventListener('DOMContentLoaded', function (){
    

});
// let btn = document.getElementById('btnAdd'); //Find #btnAdd from root node
// let btnRed = document.getElementById('btnRedAll');
// let btnBlue = document.getElementById('btnBlueEven');

// let list = document.querySelector('.main ul');

// btn.onclick = function (e) {
//     let item = document.createElement('li');
//     item.textContent = `Item ${list.children.length + 1}`;
//     list.appendChild(item);
// };

// btnRed.onclick = function (e) {
//     let items = document.querySelectorAll('.main ul li');
//     items.forEach((value, index) => {
//         value.style.color = 'red';
//         if ((index + 1) % 2 === 1) {
//             value.style.color = 'green';
//         }
//     });
// };

// btnBlue.onclick = function (e) {
//     let items = document.querySelectorAll('.main ul li:nth-child(even)');
//     items.forEach((value, index) => {
//         value.style.color = 'blue';
//     });
// };

// let calculateBtn = document.querySelector('.computation form button[type=button]');
// let num1 = document.getElementById('num1');
// let num2 = document.getElementById('num2');
// let resultContainer = document.getElementsByClassName('result')[0];

// calculateBtn.addEventListener('click', function (e) {
//     let value1 = Number(num1.value);
//     let value2 = Number(num2.value);

//     if (!isNaN(value1) && !isNaN(value2)) {
//         let computedValue = value1 + value2;
//         if(document.querySelector('select').value === '-'){
//             computedValue = value1 - value2;
//         }
//        else if(document.querySelector('select').value === '/'){
//             computedValue = (value1 / value2).toFixed(2);
//         }
//         else if(document.querySelector('select').value === '*'){
//             computedValue = value1 * value2;
//         }
//         document.getElementsByClassName('result') [0].innerHTML = `<p>Result: ${computedValue}</p>`;
//     } else {
//         resultContainer.innerHTML = 'Invalid Operation';
//     }
// }, false);

function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").textContent = result;
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").textContent = result;
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").textContent = result;
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = (num1 / num2).toFixed(1);
    document.getElementById("result").textContent = result;
  }
  
  function resetCalculator() {
    // Clear the input values
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    
    // Clear the result
    document.getElementById("result").textContent = "";
  }
  
  
