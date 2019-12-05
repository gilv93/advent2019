const fs = require('fs')

const calcFuel = (thing) => {
    let newFuel = Math.floor(thing/3) - 2
    let value
    if (((newFuel === 0) || (newFuel < 0))) {
        return 0
    }
    else {
        value = calcFuel(newFuel) + newFuel
    }

    return value
}

let content = []

fs.readFile('adventday1.txt', 'utf8', (err, data) => {
    content = data.split(/[\r\n]+/)
    content = content.map((item) => {
        return calcFuel(item)
    })
    const all = content.reduce((total, num) => {
        return total + num
    })   
    console.log(all)
})