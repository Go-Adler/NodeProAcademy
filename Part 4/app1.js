const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter a name", (name) => {
    console.log("The name you entered:" + name)
    rl.close()
})

rl.on('close',()=> {
    console.log("The process exited")
    process.exit(0)

})