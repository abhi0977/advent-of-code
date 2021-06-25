const fs = require('fs')
const expected_sum = 2020

fs.readFile('../input.txt', 'utf8', (err, data) => {
    const input_list = data.split('\n').map((input) => parseInt(input.trim()))

    for (let i = 0; i < input_list.length; i++) {
        for (let j = 1; j < input_list.length; j++) {
            for (let k = 2; k < input_list.length; k++) {
                if (input_list[i] + input_list[j] + input_list[k] === expected_sum) {
                    console.log(input_list[i] * input_list[j] * input_list[k])
                    return true
                }
            }
        }
    }
})