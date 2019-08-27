function ShiftByLetters(inputString, shiftBy) {
    let originalString = inputString.split(' ');
    let inputStringArr = inputString.split(' ');
    let sameWords = 0;
    if (typeof inputString === "string" && typeof shiftBy === "number") {
        if (!shiftBy) shiftBy = 1;
        let i = 0;
        for (let j = 0; j < inputStringArr.length; j++) {
            while(i < shiftBy) {
                let x = inputStringArr[j].split('');
                x.unshift(x.pop());
                inputStringArr[j] = x.join('');
                i++;
            }
        }
        for (let k = 0; k < originalString.length; k++) {
    		if ( originalString[k] == inputStringArr[k]) {
        		sameWords++;
        	}
        }
        return sameWords;
    } else {
        inputString = "invalid input";
        return inputString;
    }
}

module.exports.ShiftByLetters = ShiftByLetters;