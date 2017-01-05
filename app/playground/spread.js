// function add(a,b){
//   return a + b
// }
//
// console.log(add(3,1))
//
// var toAdd = [10,12]
//
// console.log(add(...toAdd))

var groupA = ['Kevin', 'Josh']
var groupB = ['Altheria', 'Quin']
var final = [...groupB, 3, ...groupA ]

console.log(final)

var person = ['Andrew', 20]
var personTwo = ['Kevin', 22]

function Greetings(name, age){
  console.log('Hello ' + name + ' you are ' + age + ' old.');
}

Greetings(...person)
Greetings(...personTwo)


var names = ['Mike', 'Kate']
var final = ['Kevin', ...names]

final.forEach(function(name){
  console.log(name)
})
