const fs = require('fs')

const storedIn = fs.readFileSync('./Part 5.1/Files/input.txt', 'utf-8')
console.log(storedIn);

let content = `The content is: ${storedIn}. \n Date created: ${Date}`
fs.writeFileSync('./Part 5.1/Files/output.txt', content)