function ShiftByLetters(inputString, shiftBy) {
    let i = 0;
    while(i < shiftBy) {
        let x = inputString.split('');
        x.unshift(x.pop());
        inputString = x.join('');
        i++;
    }
    return inputString;
}

module.exports.ShiftByLetters = ShiftByLetters;