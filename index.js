function ShiftByLetters(inputString, shiftBy) {
    if (typeof inputString === "string" && typeof shiftBy === "number") {
        let originalString = inputString.split(' ');
        let inputStringArr = inputString.split(' ');
        let sameWords = 0;
        if (!shiftBy) shiftBy = 1;
        for (let j = 0; j < inputStringArr.length; j++) {
            let i = 0;
            while(i < shiftBy) {
                let x = inputStringArr[j].split('');
                x.unshift(x.pop());
                inputStringArr[j] = x.join('');
                i++;
            }
            if ( originalString[j] === inputStringArr[j]) {
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