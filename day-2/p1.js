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
            min,
            max
        ] = rule.split("-")

        if (is_valid_password(parseInt(min), parseInt(max), letter, password)) {
            valid_password_count++
        }
    });

    console.log(valid_password_count)
})

const is_valid_password = (min, max, letter, password) => {
    const letters = password.split("")
    let count = 0;
    letters.forEach(element => {
        if (element === letter) {
            count++;
        }
    });

    if (count >= min && count <= max) {
        return true;
    } else {
        return false;
    }
}