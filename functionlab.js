// function greaterNum(x, y) {
//   if (x > y) {
//     return "the greater number of 68"
//   } else if (x < y) {
//     return  "the greater number of 77"
//   }
// }
// console.log(greaterNum(77 , 68))

// let x = 77
// let y = 68
// function greaterNum(x, y) {
//   if (x > y) {
//     return x
//   } else if (x < y) {
//     return y
//   }
// }
// const bigNum = (greaterNum(77 , 68))
// console.log(`the greater number of ${x} and ${y} is ${bigNum}`)

// function helloWorld(language) {
//   switch (language) {
//     case "en":
//       return "howdee"
//       break
//     case "de":
//       return "hola"
//       break
//     case "es":
//       return "ni"
//   }
// }

// console.log(helloWorld("en"))
// console.log(helloWorld("de"))
// console.log(helloWorld("es"))

// function assignGrade(gradeNumber) {
//  let gradeLetter = "F"
  
//  if (gradeNumber >= 90) {
//     gradeLetter = "A"
//   }
//   if (gradeNumber > 80 && gradeNumber < 89) {
//     gradeLetter = "B"
//   }
//   if (gradeNumber > 70 && gradeNumber < 79) {
//     gradeLetter = "C"
//   }
//   if (gradeNumber > 60 && gradeNumber < 69) {
//     gradeLetter = "D"
//   }
//   return gradeLetter
// }
// console.log(assignGrade(76))

function assignGrade(gradeNumber) {
 let gradeLetter = "F"
  
 if (gradeNumber >= 90) {
    gradeLetter = "A"
  }
  if (gradeNumber >= 80) {
    gradeLetter = "B"
  }
  if (gradeNumber >= 70) {
    gradeLetter = "C"
  }
  if (gradeNumber >= 60) {
    gradeLetter = "D"
  }
  return gradeLetter
}
// console.log(assignGrade(76))

console.log("89 => ",assignGrade(76))
console.log("79 => ",assignGrade(76))
console.log("69 => ",assignGrade(76))
console.log("59 => ",assignGrade(76))
console.log("99 => ",assignGrade(76))

