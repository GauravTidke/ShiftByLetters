function ShiftByLetters(inputString, shiftBy) {
    let i = 0;
    if (!shiftBy) shiftBy = 1;
    if (typeof inputString === "string") {
        while(i < shiftBy) {
            let x = inputString.split('');
            x.unshift(x.pop());
            inputString = x.join('');
            i++;
        }
    } else {
        inputString = "invalid input";
    }
    return inputString;
}

module.exports.ShiftByLetters = ShiftByLetters;