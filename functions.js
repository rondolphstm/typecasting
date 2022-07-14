// function sum(x, y) {
    const sum = (x,y) => { // ES 6 arrow function
   if (typeof(x) != "number"){
     return "No No No!"
  }
    if (y == undefined) {
    return x
  } else {
    return x + y
  }
}

const results = sum(3,4) //7

console.log(results)


