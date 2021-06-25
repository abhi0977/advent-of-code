const fs = require('fs')

fs.readFile('../input.txt', 'utf8', (err, data) => {
    const input_list = data.split('\n')
    const road_length = input_list[0].length
    let mul = 1;

    // Right 1, down 1.
    // Right 3, down 1. (This is the slope you already checked.)
    // Right 5, down 1.
    // Right 7, down 1.
    // Right 1, down 2.

    const test_data = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ]

    test_data.forEach(element => {
        mul *= get_tree_count(input_list, road_length, element[0], element[1])
    });

    console.log(mul)

})

const get_tree_count = (input_list, road_length, right, down) => {
    let starting_index = 0;
    let trees = 0;

    for (let index = 0; index < input_list.length;) {
        const element = input_list[index];

        if (element.charAt(starting_index % road_length) === "#") {
            trees++;
        }
        starting_index += right;
        index += down;
    }
    console.log(trees)
    return trees
}