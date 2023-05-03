// function calculate(a, b) {
//   if (a === b) {
//       return "სწორია"

//   } else {
//       return "არ არის სწორი"
//   }

// }
// console.log(calculate(10, "10"))



// function fToC(f) {
//   if (typeof f !== "number") {
//       return false
//   } else {
//       return (f - 32) * 5 / 9
//   }
// }
// console.log(fToC("100"))
// console.log(fToC(100))


function num(a, b, operation) {
  let answer
  if (typeof a !== "number" || typeof b !== "number") {
      return false
  } else if (operation === "+") {
      answer = a + b
  } else if (operation === "-") {
      answer = a - b
  } else if (operation === "*") {
      answer = a * b
  } else if (operation === "/") {
      answer = a / b
  } else {
      return false
  }
  return answer
}

console.log(num(20, 10, "-"))