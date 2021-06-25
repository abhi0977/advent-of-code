const fs = require('fs')

fs.readFile('../input.txt', 'utf8', (err, data) => {
    let count = 0;
    const input_list = data.split('\n\n').map((x) =>
        x.split('\n').map((y) =>
            y.split(" ").map((z) =>
                z.split(":")[0])));

    input_list.map((data) => {
        const details = data.flat()
        if (details.length === 8) {
            count++;
        } else if (details.length === 7 && !details.includes("cid")) {
            count++;
        }
    })
    console.log(count)
})