
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
    if (timesOfOperations === 0) {
      num1 = Number(num1 + `${i}`) //type ==int
    } else {
      num2 = Number(num2 + `${i}`)//type ==int
    }

    display += `${i}`
    theDisplay.textContent = display
  })
}
button["clearAll"] = document.querySelector(".clearAll")
button["del"] = document.querySelector(".del")
button["add"] = document.querySelector(".add")
button["sub"] = document.querySelector(".subrtact")
button["div"] = document.querySelector(".divi")
button["mul"] = document.querySelector(".multi")
button["dot"] = document.querySelector(".dot")
button["sum"] = document.querySelector(".sum")

//other funs
button["sum"].addEventListener("click", () => {
  display = operate(num1, lastOpUsed, num2)
  theDisplay.textContent = operate(num1, lastOpUsed, num2)
  num1 = operate(num1, lastOpUsed, num2)
  num2 = 0
  timesOfOperations = 0
})

button["clearAll"].addEventListener("click", () => {
  num1 = 0
  num2 = 0
  timesOfOperations = 0
  display = num1
  theDisplay.textContent = display
})

// button["del"].addEventListener("click", () => {
//   if (timesOfOperations === 0) {
//     num1 = num1.toString().slice(0, -1)
//     num1 = Number(num1)
//     display = num1
//     theDisplay.textContent = display;
//   }
//   if (timesOfOperations === 1) {
//     if (num2 != 0) {
//       num2 = num2.toString().slice(0, -1)
//       num2 = Number(num2)
//       display += num2
//       theDisplay.textContent = display;
//     }
//   }
// })

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
  }
})
// some basic functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

const operate = (num1, op, num2) => {
  if (op === "+") {
    return add(num1, num2)
  } else if (op === "-") {
    return subtract(num1, num2)
  } else if (op === "*") {
    return multiply(num1, num2)
  } else {
    return divide(num1, num2)
  }
};

/* 
  del button not working yet
  0 + num when CE not fixed
  Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
  Add a “backspace” button, so the user can undo their last input if they click the wrong number.
  Add keyboard support!
*/