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
    // if they are, generate numbers in logic function using stop number as parameter
    let numbersArray = generateSodaPop(stopNumber);
    // display the list of numbers using the returned array
    //  from logic function, first & second numbers as parameters in view function
    displaySodaPop(numbersArray, firstNumber, secondNumber);
  }
  // if stop number is greater the 5000, display alert asking for # < 5000
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
    // if not numbers, alert requesting numbers only
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
  // initialize an empty array variable
  let numberList = [];

  // for loop to generate numbers from 1 - stop 
  for(i = 1; i <= stop; i++) {
    // in each iteration -- add current number to array
    numberList.push(i);
  }
  
  // return the array of numbers 
  return numberList;
  
};

// View function
// display 
function displaySodaPop(arrayOfNumbers,first, second) {
  // get table element from document
  let tableBody = document.getElementById('results');

  // initialize a variable to hold the html to be added to the table body
  let tableHtml = "";

  // using the array length, loop through list and add classes to numbers that
  // meet conditions in if statement
  for(i = 0; i < arrayOfNumbers.length; i++) {
    let value = arrayOfNumbers[i];
    let divisibleByFirst = "soda";
    let divisibleBySecond = "pop";
    let divisibleByBoth = "sodapop";
    let className = value % first == 0 && value % second !== 0 ? "soda" 
    : value % first !== 0 && value % second == 0 ? "pop" 
    : value % first == 0 && value % second == 0 ? "sodapop"
    : "";

    // initialize a variable to hold html for each number
    let tableRow = "";

    // if statement with conditions for html element
    if (value % first == 0 && value % second == 0) {
     tableRow = `<tr><td class=${className}>${divisibleByBoth}</td></tr>`;
    }else if(value % first == 0 && value % second !== 0 ) {
      tableRow = `<tr><td class=${className}>${divisibleByFirst}</td></tr>`;
    }else if(value % first !== 0 && value % second == 0) {
      tableRow = `<tr><td class=${className}>${divisibleBySecond}</td></tr>`;
    }
    else {
      tableRow = `<tr><td>${value}</td></tr>`;
    }

    // end of each iteration -- add the row to the table html variable
    tableHtml += tableRow;

  }

  // after loop ends -- assign the table html as the content for the table 
  tableBody.innerHTML = tableHtml;
  
};
  