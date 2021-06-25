const fs = require('fs')

fs.readFile('../input.txt', 'utf8', (err, data) => {
    const inputs = data.split('\n').map((input) => input.trim())
    let valid_password_count = 0;

    inputs.forEach(element => {
        const [
            policy,
            password
        ] = element.split(":")

        const [
            rule,
            letter
        ] = policy.split(" ")

        const [
            index_1,
            index_2
        ] = rule.split("-")

        if (is_valid_password(letter, [parseInt(index_1), parseInt(index_2)], password.toString())) {
            valid_password_count++
        }
    });

    console.log(valid_password_count)
})

const is_valid_password = (letter, indexes, password) => {
    let count = 0;
    indexes.forEach(element => {
        if (password.charAt(element) === letter) {
            count++;
        }
    });

    if (count === 1) {
        return true
    } else {
        return false
    }
}