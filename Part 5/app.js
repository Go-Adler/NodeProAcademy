const readline = require('readline')
const fileSystem = require('fs')

let textIn = fileSystem.readFileSync('./Part 5/Files/input.txt', 'utf-8')
console.log(textIn)
console.log("working")

let content = `Data read from the file: ${textIn}. \nDate created: ${new Date()}`
let textEntered = fileSystem.writeFileSync('./Part 5/Files/output.txt', content)
console.log()