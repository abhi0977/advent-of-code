const fs = require('fs')
const expected_sum = 2020

fs.readFile('../input.txt', 'utf8', (err, data) => {
    const input_list = data.split('\n').map((input) => parseInt(input.trim()))

    input_list.forEach(element => {
        const exp = expected_sum - element;
        if (list.includes(exp)) {
            console.log(element, exp)
        }
    });
})