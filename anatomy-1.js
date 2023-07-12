// Function declaration

function sayHello() {
    console.log('Hello!')
}
sayHello()

function sayHelloTo(name) {
    console.log('1 - hello ' + name)
    console.log(`2 - hello ${name}!`)
}

sayHelloTo('Ericky')

function returnHi(){
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}
console.log(returnHiTo('john'))