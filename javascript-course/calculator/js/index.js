let calculationString = localStorage.getItem('calculationString') || '';
const outputElement = document.querySelector('.js-output');

function updateDisplay() {
  outputElement.innerText = calculationString;
}

function addToString(char) {
  calculationString += char;
  localStorage.setItem('calculationString', calculationString);
  updateDisplay();
}

function resetCalculationString() {
  calculationString = '';
  localStorage.setItem('calculationString', calculationString);
  updateDisplay();
}

function calculate() {
  calculationString = eval(calculationString).toString();
  localStorage.setItem('calculationString', calculationString);
  updateDisplay();
}

updateDisplay();



// <!-- <body>

//   <p>
//     <button onclick="addToString(calculationString,'1');"> 1 </button>

//     <button onclick="addToString(calculationString,'2');"> 2 </button>

//     <button onclick="addToString(calculationString,'3');"> 3 </button>

//     <button onclick="addToString(calculationString,'+');"> + </button>
//   </p>
  
//   <p>
//     <button onclick="addToString(calculationString,'4');"> 4 </button>

//     <button onclick="addToString(calculationString,'5');"> 5 </button>

//     <button onclick="addToString(calculationString,'6');"> 6 </button>

//     <button onclick="addToString(calculationString,'-');"> - </button>
//   </p>

//   <p>
//     <button onclick="addToString(calculationString,'7');"> 7 </button>

//     <button onclick="addToString(calculationString,'8');"> 8 </button>

//     <button onclick="addToString(calculationString,'9');"> 9 </button>

//     <button onclick="addToString(calculationString,'*');"> * </button>
//   </p>

//   <p>
//     <button onclick="addToString(calculationString,'0');"> 0 </button>

//     <button onclick="addToString(calculationString,'.');"> . </button>

//     <button onclick="addToString(calculationString,'/');"> / </button>

//     <button onclick="calculate();"> = </button>
//   </p>
  
//   <p>
//     <button onclick="resetCalculationString();"> Clear </button>
//   </p>

//   <p class="js-output"></p>

//   <script>

//     let calculationString = localStorage.getItem('calculationString') || document.body.querySelector('.js-output');
//     const outputElement = document.querySelector('.js-output');

//     function updateDisplay() {
//       outputElement.innerText = calculationString;
//     }

//     function addToString(calculationString , char ) {
//       calculationString += char;
//       localStorage.setItem('calculationString', calculationString);
//       updateDisplay()

//     }

//     function resetCalculationString() {
//       calculationString.innerHTML = '';
//       localStorage.setItem('calculationString', calculationString);
//       updateDisplay()
//     }

//     function calculate() {

//       try {
//         calculationString = eval(calculationString).toString();
//       } catch (e) {
//         calculationString = 'Error';
//       }
      
//       localStorage.setItem('calculationString', calculationString);
//       updateDisplay()
//     }

//     updateDisplay()

    
//   </script>

// </body> 