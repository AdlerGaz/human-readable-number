module.exports = function toReadable(number) {
    const objNum = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    const arr = number.toString().split('');

    switch (arr.length) {
        case 3:
            if (arr[1] == 0 && arr[2] == 0) {
                return `${objNum[arr[0]]} hundred`;
            } else if (arr[1] != 0 && arr[2] == 0) {
                return `${objNum[arr[0]]} hundred ${objNum[arr[1] + 0]}`;
            } else if (arr[1] == 1) {
                return `${objNum[arr[0]]} hundred ${objNum[number % 100]}`;
            } else if (arr[1] == 0) {
                return `${objNum[arr[0]]} hundred ${objNum[arr[2]]}`;
            } else {
                return `${objNum[arr[0]]} hundred ${objNum[arr[1] + 0]} ${arr[2] != 0 ? objNum[arr[2]] : ''}`;
            }
            case 2:
                if (number <= 20 || arr[1] == 0) {
                    return objNum[number];
                } else {
                    return `${objNum[arr[0] + 0]} ${objNum[arr[1]]}`;
                }
                case 1:
                    return objNum[number];
    }
}
