// var // ECMA Script 6 // CASE SENSITIVE
let nombre1 = 5   // SCOPE - Ámbito de una variable - alcance
let first_name = "Pepito"
let lastName = "Pérez"
// let FirstName
// const ID

let age = 18

let fullName = first_name + " " + lastName
let fullName2 = `${first_name} ${lastName}`

// No debería usar como caracter inicial un número
// No debería contener signos de puntuación ni caracteres latinos
// No puede tener espacios en blanco

if(age >= 18 && age <= 25) {
    console.log("Entre mijo!")
} else {
    console.log("yaper!!")
}

greeting()
let res = add(5, 6)
console.log("La suma es:", res)

function greeting() { // Hoistig
  console.log("Hola mundo cruel")
}

function greetingName(name = 'usuario') {
  console.log(`Hola ${name} mucho gusto`)
}

const greeting2 = () => {
  console.log("Hola mundo cruel 2")
}

function add(a, b) {
  return a + b
}

greeting2()
greetingName("Fulanito")