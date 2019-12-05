const fs = require('fs')

const findTarget = (modList) => {
    let iter = 0
    while (iter < modList.length) {
        if (((iter === 0) || (iter%4 === 0))) {
            if (modList[iter] === 99) {
                iter = modList.length
            }
            else {
                let position1 = modList[iter+1]
                let position2 = modList[iter+2]
                let position3 = modList[iter+3]
                if (modList[iter] === 1) {
                    modList[position3] = modList[position1] + modList[position2]
                }
                else if (modList[iter] === 2) {
                    modList[position3] = modList[position1] * modList[position2]
                }
                iter++
            }
        }
        else {
            iter++
        }
    }
    return modList[0]
}

let content = []

fs.readFile('adventday2.txt', 'utf8', (err, data) => {
    content = data.split(',')
    content = content.map((item) => {
        return Number(item)
    })
    const target = 19690720
    let value
    let stopper = true
    while (stopper) {
        for (let i = 0; i < 100; i++) {
            let shallow = [...content]
            shallow[1] = i
            for (let x = 0; x < 100; x++) {
                let newShallow = [...shallow]
                newShallow[2] = x
                value = findTarget(newShallow)
                if (value === target) {
                    console.log(newShallow)
                    stopper = false
                }
            }
        }
    }
})