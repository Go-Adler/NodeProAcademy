const fs = require('fs')

const comeIn = fs.readFileSync('./Part 5.2/Files/input.txt', 'utf-8')

fs.writeFileSync('./Part 5.2/Files/output.txt', comeIn)

const content = `${comeIn} <= This is from first file, and it is created ${new Date()}`

fs.writeFileSync('./Part 5.2/Files/output2.txt', content)

fs.writeFileSync('./Part 5.2/Files/output3.txt', "Testcontent")