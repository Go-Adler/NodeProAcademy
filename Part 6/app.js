const fs = require('fs')

fs.readFile('./Part 6/Files/start.txt', 'utf-8', (error1, data1) => {
    console.log("Error is: " + error1)
    console.log("Data is: " + data1);
    fs.readFile(`./Part 6/Files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log("Second level error: " + error2)
        console.log("Second level data: " + data2);
        fs.readFile('./Part 6/Files/final.txt', 'utf-8', (error3, data3) => {
            console.log("Error 3: " + error3);
            console.log("Data 3: " + data3);
            const content = data3
            fs.writeFile('./Part 6/Files/Final2.txt', content, () => {
                console.log("EXit");
            })
        })
    })
})