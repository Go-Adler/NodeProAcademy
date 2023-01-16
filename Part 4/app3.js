const readline = require('readline')
const interfaceRL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interfaceRL.question("Enter something: ", (enteredValue) => {
    console.log('Entered values is' + enteredValue)
    interfaceRL.close()
})

interfaceRL.on('close', () => {
    console.log("Interface closed")
    process.exit(0)
})
