// Controller function
function getValues() {
  // get user inputs from the page
let firstNumber = document.getElementById('firstNumber').value;
let secondNumber = document.getElementById('secondNumber').value;
let stopNumber = document.getElementById('stopNumber').value;

// parse inputs as numbers 
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
stopNumber = parseInt(stopNumber);

// validate inputs are numbers 
  if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && Number.isInteger(stopNumber) && stopNumber < 5000) {
    // if they are, generate numbers
    let numbersArray = generateSodaPop(stopNumber);
    // then display
    displaySodaPop(numbersArray, firstNumber, secondNumber);
  }
  else if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && Number.isInteger(stopNumber) && stopNumber > 5000) {
    Swal.fire(
      {
        icon: 'error',
        title: 'Oops',
        text: 'Please enter a number less than 5,000.'
      }
    );
  }
  else {
    // if not, alert requesting numbers only
    Swal.fire(
      {
        icon: 'error',
        title: 'Oops',
        text: 'Only integers are allowed for SodaPop!'
      }
    );
  }


}

// Logic function
function generateSodaPop(stop) {
  // generate numbers 1-100
  let numberList = [];


  for(i = 1; i <= stop; i++) {
    numberList.push(i);
  }
  
  return numberList;
  
};

// View function
// display 
function displaySodaPop(arrayOfNumbers,first, second) {
  let tableBody = document.getElementById('results');

  let tableHtml = "";
  for(i = 0; i < arrayOfNumbers.length; i++) {
    let value = arrayOfNumbers[i];
    let divisibleByFirst = "soda";
    let divisibleBySecond = "pop";
    let divisibleByBoth = "sodapop";
    let className = value % first == 0 && value % second !== 0 ? "soda" 
    : value % first !== 0 && value % second == 0 ? "pop" 
    : value % first == 0 && value % second == 0 ? "sodapop"
    : "";

    let tableRow = "";

    if (value % first == 0 && value % second == 0) {
     tableRow = `<tr><td class=${className}>${divisibleByBoth}</td></tr>`;
    }else if(value % first == 0 && value % second !== 0) {
      tableRow = `<tr><td class=${className}>${divisibleByFirst}</td></tr>`;
    }else if(value % first !== 0 && value % second == 0) {
      tableRow = `<tr><td class=${className}>${divisibleBySecond}</td></tr>`;
    }
    else {
      tableRow = `<tr><td>${value}</td></tr>`;
    }

    tableHtml += tableRow;

  }
  
  tableBody.innerHTML = tableHtml;
  
};
  