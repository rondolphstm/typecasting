let num = 23
num = 45
// console.log(num)

const toText = String(num)
// console.log(toText + 'text here')

const myString = 'boco code'
const toNum = Number(myString)
// console.log(toNum)

// booleans to number
// console.log(Number(false))
// console.log(Number(true))

// booleans to string 
const falsStr = String(false)
const trusStr = String(true)
const num2 = 2345
const numTostring = num2.toString()
// console.log(`first str ${falsStr} & second str ${trusStr}`)

// check type
const str = '23'
const strType = typeof(str)
// console.log(strType)

const num1 = 234
const numType = typeof(num1)
// console.log(numType)


/****Booleans */

// console.log(true == true)
// console.log(true == 'true')
// console.log('true' == true)

// console.log('true' === true)
// console.log(true === 'true')

const checkNum = 100
// console.log(checkNum === true)

const checkNum2 = 7 + 1 + 2.34
// console.log(checkNum2 === true)

// console.log(checkNum2 && true) // true
// console.log(checkNum2 && false) // false 
// console.log(checkNum2 && false && false && true) // false

// console.log(checkNum2 || false) // 10.34
// console.log(undefined || false) // false
// console.log(3 || false) // 3
const nullNum = -0
// console.log(null || nullNum || 'test' && true) // 578


/**************Comparisons */

let isEqual = 78 < 90 // true
isEqual = 78 <= 78 // true
isEqual = 78 >= 100 // false
isEqual = 78 != 100 // true
console.log(isEqual)

