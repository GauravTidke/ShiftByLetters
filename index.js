function ShiftByLetters(inputString, shiftBy) {
    let i = 0;
    if (!shiftBy) shiftBy = 1;
    if (inputString) {
        while(i < shiftBy) {
            let x = inputString.split('');
            x.unshift(x.pop());
            inputString = x.join('');
            i++;
        }
    }
    return inputString;
}

module.exports.ShiftByLetters = ShiftByLetters;