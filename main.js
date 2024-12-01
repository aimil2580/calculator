
let num1 = 0;
let num2 = 0;
let op = "";
let lastOpUsed = "";

let timesOfOperations = 0

let display = "";

const theDisplay = document.querySelector(".textSpace");

const button = new Object();
for (let i = 0; i <= 9; i++) {
  button[`num${i}`] = document.querySelector(`.n${i}`)
  button[`num${i}`].addEventListener("click", () => {
    //fix for the 0 that remained when n-n + typing 
    if (display === 0) {
      display = ""
    }

    if (timesOfOperations === 0) {
      if (dotUsed1 === true) {
        num1 = Number(num1 + "." + `${i}`)

      } else {
        num1 = Number(num1 + `${i}`) //type ==int
      }
    } else {
      if (dotUsed2 === true) {
        num2 = Number(num2 + "." + `${i}`)//type ==int
      } else {
        num2 = Number(num2 + `${i}`)//type ==int
      }
    }

    display += `${i}`
    theDisplay.textContent = display
  })
}
// button.num0.addEventListener("click", () => {
//   if (timesOfOperations === 0) {
//     pressedZero1 = true
//   }
//   if (timesOfOperations === 1) {
//     pressedZero1 = true
//   }
// })
button["clearAll"] = document.querySelector(".clearAll")
button["del"] = document.querySelector(".del")
button["add"] = document.querySelector(".add")
button["sub"] = document.querySelector(".subrtact")
button["div"] = document.querySelector(".divi")
button["mul"] = document.querySelector(".multi")
button["dot"] = document.querySelector(".dot")
button["sum"] = document.querySelector(".sum")

//other funs
let dotUsed1 = false
let dotUsed2 = false
let pressedZero1 = false
let pressedZero2 = false

button["dot"].addEventListener("click", () => {
  if (dotUsed1 === false) {
    display += "."
    theDisplay.textContent = display
    dotUsed1 = true
  } else if (dotUsed2 === false) {
    display += "."
    theDisplay.textContent = display
    dotUsed2 = true
  }
})

button["sum"].addEventListener("click", () => {
  display = operate(num1, lastOpUsed, num2)
  theDisplay.textContent = operate(num1, lastOpUsed, num2)
  num1 = operate(num1, lastOpUsed, num2)
  num2 = 0
  timesOfOperations = 0
  if (num1 % 1 !== 0) {
    dotUsed1 = true
  } else {
    dotUsed1 = false
  }
  dotUsed2 = false
  
})

button["clearAll"].addEventListener("click", () => {
  num1 = 0
  num2 = 0
  timesOfOperations = 0
  dotUsed1 = false
  dotUsed2 = false
  display = ""
  theDisplay.textContent = display
})

button["del"].addEventListener("click", () => {

  if (timesOfOperations === 0) {
    num1 = num1.toString().slice(0, -1)
    num1 = Number(num1)
    display = num1

    //remove the extra 0 fix somehow
    if (display === 0) {
      display = " "
    }

    theDisplay.textContent = display;

  }
  if (timesOfOperations === 1) {
    if (num2 != 0) {
      num2 = num2.toString().slice(0, -1)
      num2 = Number(num2)
      display = display.slice(0, -1)
      theDisplay.textContent = display;
    }
  }
})

button["add"].addEventListener("click", () => {
  op = "+"
  display += "+"
  theDisplay.textContent = display
  timesOfOperations += 1
  if (timesOfOperations === 1) {
    lastOpUsed = op
  }

  if (timesOfOperations === 2) {
    display = operate(num1, lastOpUsed, num2) + "+"
    theDisplay.textContent = operate(num1, lastOpUsed, num2) + "+"
    num1 = operate(num1, lastOpUsed, num2)
    num2 = 0
    timesOfOperations = 1
    lastOpUsed = "+"
    dotUsed2 = false
  }
})

button["sub"].addEventListener("click", () => {
  op = "-"
  display += "-"
  theDisplay.textContent = display
  timesOfOperations += 1
  if (timesOfOperations === 1) {
    lastOpUsed = op
  }
  if (timesOfOperations === 2) {
    display = operate(num1, lastOpUsed, num2) + "-"
    theDisplay.textContent = operate(num1, lastOpUsed, num2) + "-"
    num1 = operate(num1, lastOpUsed, num2)
    num2 = 0
    timesOfOperations = 1
    lastOpUsed = "-"
    dotUsed2 = false
  }
})

button["div"].addEventListener("click", () => {
  op = "/"
  display += "/"
  theDisplay.textContent = display
  timesOfOperations += 1
  if (timesOfOperations === 1) {
    lastOpUsed = op
  }
  if (timesOfOperations === 2) {
    display = operate(num1, lastOpUsed, num2) + "/"
    theDisplay.textContent = operate(num1, lastOpUsed, num2) + "/"
    num1 = operate(num1, lastOpUsed, num2)
    num2 = 0
    timesOfOperations = 1
    lastOpUsed = "/"
    dotUsed2 = false
  }
})

button["mul"].addEventListener("click", () => {
  op = "*"
  display += "*"
  theDisplay.textContent = display
  timesOfOperations += 1
  if (timesOfOperations === 1) {
    lastOpUsed = op
  }
  if (timesOfOperations === 2) {
    display = operate(num1, lastOpUsed, num2) + "*"
    theDisplay.textContent = operate(num1, lastOpUsed, num2) + "*"
    num1 = operate(num1, lastOpUsed, num2)
    num2 = 0
    timesOfOperations = 1
    lastOpUsed = "*"
    dotUsed2 = false
  }
})
// some basic functions
const add = (a, b) => {
  return Math.round((a + b) * 100) / 100

};

const subtract = (a, b) => {
  return Math.round((a - b) * 100) / 100
};

const divide = (a, b) => {
  return Math.round((a / b) * 100) / 100
};

const multiply = (a, b) => {
  return Math.round((a * b) * 100) / 100
};

const operate = (num1, op, num2) => {
  if (op === "+") {
    return add(num1, num2)
  } else if (op === "-") {
    return subtract(num1, num2)
  } else if (op === "*") {
    return multiply(num1, num2)
  } else if (op === "/") {
    return divide(num1, num2)
  } else {
    return num1
  }
};

/* 
  Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
  Add keyboard support!
*/