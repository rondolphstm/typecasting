// let animal = 'cat' // glabal scope
// animal = 'Dog'
// animal = 'snake'

// if (animal === 'cat' || animal === 'Dogs' || animal === 'snake'){

//     animal = 'snake' // block scoped
//     console.log('wooof', animal)
// } else {
//  console.log('your animal is ', animal)
// }

// let person ='mammal'
// //  person = 'not mammal'
// //  person = false || null || undefined
// if (person == false){
// console.log('yes thought so!')
// } else if (person & true){
//  console.log('not sure')
// }else if (person && 'not mammal'){
// console.log('this is catch all')
// }else {
//     console.log('catch all')
// }

/******* Date */

const date = new Date()
console.log(date)

const time = date.getTime()
console.log(time)

const hours = date.getHours()
console.log(hours)

if (hours > 12) {
  console.log("is past lunch time")
} else if (hours <= 11.5) {
  console.log("is almost lunch time")
}

const today = date.getDate()
console.log(today)

if (today === 12) {
  console.log("happy july 12th")
}

if (today === 12) console.log("happy july 12th")
