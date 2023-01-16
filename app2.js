const readline = require('readline')
const InterfaceRL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

InterfaceRL.question("Enter something: ", (thisThing) => {
    console.log("This thing is: " + thisThing)
    InterfaceRL.close()
})

InterfaceRL.on('close', () => {
    console.log('interface closed bro')
    process.exit(0)
})