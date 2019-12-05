const fs = require('fs')

let content = []

fs.readFile('adventday2.txt', 'utf8', (err, data) => {
    content = data.split(',')
    content = content.map((item) => {
        return Number(item)
    })
    let i = 0
    while (i < content.length) {
        if (((i === 0) || (i%4 === 0))) {
            if (content[i] === 99) {
                i = content.length
            }
            else {
                let position1 = content[i+1]
                let position2 = content[i+2]
                let position3 = content[i+3]
                if (content[i] === 1) {
                    content[position3] = content[position1] + content[position2]
                }
                else if (content[i] === 2) {
                    content[position3] = content[position1] * content[position2]
                }
                i++
            }
        }
        else {
            i++
        }
    }
    console.log(content[0])
})