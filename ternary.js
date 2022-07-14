const date = new Date()
console.log(date)
 
const hour = date.getHours()
console.log('this is hour from date =>>> ', hour)
 message = 'good morning class'
message = `good ${hour > 12 ? 'afternoon' : 'morning'} class`

let geeting

if(hour > 12){
    greeting ='afternon'
} else {
    greeting = 'morning'
}
message = `good ${greeting} class`

let message2 = `good ${hour > 12 ? 'afternon ': 'morning'} class`

console.log(message2)
