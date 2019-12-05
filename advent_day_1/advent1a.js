const fs = require('fs')


let content = []

fs.readFile('adventday1.txt', 'utf8', (err, data) => {
    content = data.split(/[\r\n]+/)
    content = content.map((item) => {
        return Math.floor(Number(item)/3) - 2
    })
    const all = content.reduce((total, num) => {
        return total + num
    })   
    console.log(all)
})