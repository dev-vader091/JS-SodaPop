// Controller function
function getValues() {
  // get user inputs from the page
let firstNumber = document.getElementById('firstNumber').value;
let secondNumber = document.getElementById('secondNumber').value;

// parse inputs as numbers 
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

// validate inputs are numbers 
  if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
    // if they are, generate numbers
    let numbersArray = generateSodaPop();
    // then display
    displaySodaPop(numbersArray, firstNumber, secondNumber);
  }else {
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
function generateSodaPop() {
  // generate numbers 1-100
  let numberList = [];


  for(i = 1; i <= 100; i++) {
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

    let tableRow = "";

    if (value % first == 0 && value % second == 0) {
     tableRow = `<tr><td>${divisibleByBoth}</td></tr>`;
    }else if(value % first == 0 && value % second !== 0) {
      tableRow = `<tr><td>${divisibleByFirst}</td></tr>`;
    }else if(value % first !== 0 && value % second == 0) {
      tableRow = `<tr><td>${divisibleBySecond}</td></tr>`;
    }
    else {
      tableRow = `<tr><td>${value}</td></tr>`;
    }

    tableHtml += tableRow;

  }
  
  tableBody.innerHTML = tableHtml;
  
};
  