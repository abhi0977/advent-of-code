const fs = require('fs')

fs.readFile('../input.txt', 'utf8', (err, data) => {
    const input_list = data.split('\n')
    const road_length = input_list[0].length

    let starting_index = 0;
    let trees = 0;

    input_list.forEach(element => {
        if (element.charAt(starting_index % road_length) === "#") {
            trees++;
        }
        starting_index += 3
    });

    console.log(trees)
})