//declarations
let num1 = "";
let num2 = "";
let op = "";
let lastOpUsed = "";
let dotUsed1 = false
let dotUsed2 = false
let timesOfOperations = 0
let display = "";

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const theDisplay = document.querySelector(".textSpace");
const button = new Object();

for (let i = 0; i <= 9; i++) {
  button[`num${i}`] = document.querySelector(`.n${i}`)
  button[`num${i}`].addEventListener("click", () => {
    numParser(i)
  })
}


button.clearAll = document.querySelector(".clearAll")
button.del = document.querySelector(".del")
button.add = document.querySelector(".add")
button.sub = document.querySelector(".subrtact")
button.div = document.querySelector(".divi")
button.mul = document.querySelector(".multi")
button.dot = document.querySelector(".dot")
button.sum = document.querySelector(".sum")

//event listeners

document.addEventListener("keydown", (e) => {
  if (nums.includes(e.key)) {
    numParser(e.key)
  }

  switch (e.key) {
    case ".":
      dotAppender()
      break
    case "=":
      summary()
      break
    case "Enter":
      summary()
      break
    case "Escape":
      clearAll()
      break
    case "Backspace":
      del()
      break 
    case "+":
      plus()
      break
    case "-":
      sub()
      break
    case "/":
      div()
      break
    case "*":
      mul()
      break
  }

})

button.dot.addEventListener("click", () => {
  dotAppender()
})

button.sum.addEventListener("click", () => {
  summary()
})

button.clearAll.addEventListener("click", () => {
  clearAll()
})

button.del.addEventListener("click", () => {
  del()
})

button.add.addEventListener("click", () => {
  plus()
})

button.sub.addEventListener("click", () => {
  sub()
})

button.div.addEventListener("click", () => {
  div()
})

button.mul.addEventListener("click", () => {
  mul()
})



//functions for operatios
const numParser = (i) => {
  if (display === 0) {
    display = ""
  }
  if (timesOfOperations === 0) {
    num1 = num1 + i
  } else {
    num2 = num2 + i
  }
  display += `${i}`
  theDisplay.textContent = display
}

const dotAppender = () => {
  if (dotUsed1 === false  ) {
    display += "."
    theDisplay.textContent = display
    num1 += "."
    dotUsed1 = true
  }
  if (dotUsed2 === false && timesOfOperations === 1) {
    display += "."
    theDisplay.textContent = display
    num2 += "."
    dotUsed2 = true
  }
}

const summary = () => {
  display = operate(num1, lastOpUsed, num2).toString()
  theDisplay.textContent = display
  num1 = operate(num1, lastOpUsed, num2).toString()
  num2 = ""
  timesOfOperations = 0
  dotUsed2 = false

  if (Number(num1) % 1 === 0) {
    dotUsed1 = false
  }
}

const clearAll = () => {
  num1 = ""
  num2 = ""
  timesOfOperations = 0
  dotUsed1 = false
  dotUsed2 = false
  display = ""
  theDisplay.textContent = display
}

const del = () => {
  if (timesOfOperations === 0) {
    num1 = num1.slice(0, -1)
    display = num1
    //remove the extra 0 fix somehow
    if (display === 0) {
      display = ""
    }
    theDisplay.textContent = display;
  }
  if (timesOfOperations === 1) {
    num2 = num2.slice(0, -1)
    display = display.slice(0, -1)
    theDisplay.textContent = display;
  }
}

const plus = () => {
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
    num1 = operate(num1, lastOpUsed, num2).toString()
    num2 = ""
    timesOfOperations = 1
    lastOpUsed = "+"
    dotUsed2 = false
  }
}

const sub = () => {
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
    num1 = operate(num1, lastOpUsed, num2).toString()
    num2 = ""
    timesOfOperations = 1
    lastOpUsed = "-"
    dotUsed2 = false
  }
}

const div = () => {
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
    num1 = operate(num1, lastOpUsed, num2).toString()
    num2 = ""
    timesOfOperations = 1
    lastOpUsed = "/"
    dotUsed2 = false
  }
}


const mul = () => {
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
    num1 = operate(num1, lastOpUsed, num2).toString()
    num2 = ""
    timesOfOperations = 1
    lastOpUsed = "*"
    dotUsed2 = false
  }
}
// some basic functions
const add = (a, b) => {
  return Math.round((Number(a) + Number(b)) * 10000) / 10000

};

const subtract = (a, b) => {
  return Math.round((Number(a) - Number(b)) * 10000) / 10000
};

const divide = (a, b) => {
  return Math.round((Number(a) / Number(b)) * 10000) / 10000
};

const multiply = (a, b) => {
  return Math.round((Number(a) * Number(b)) * 10000) / 10000
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

