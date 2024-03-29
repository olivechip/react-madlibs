function addCommas(val) {
    const str = Math.abs(val).toString();
    let result = [];
    let commas = 0;
    const index = str.indexOf(".");

    if (index !== -1) {
        const integerPart = str.substring(0, index);
        const decimalPart = str.substring(index + 1);
        
        const integerArr = integerPart.split('').reverse();
        let count = 1;
        for (let x of integerArr) {
            if (count % 4 !== 0) {
                result.unshift(x);
            } else {
                result.unshift(",");
                result.unshift(x);
                count++;
                commas++;
            }
            count++;
        }
        
        result.push(".");
        
        const decimalArr = decimalPart.split('');
        for (let x of decimalArr) {
            result.push(x);
        }
    } else {
        const strArr = str.split('').reverse();
        let count = 1;
        for (let x of strArr) {
            if (count % 4 !== 0) {
                result.unshift(x);
            } else {
                result.unshift(",");
                result.unshift(x);
                count++;
                commas++;
            }
            count++;
        }
    }

    if (val < 0) {
        result.unshift("-");
    }

    const final = result.join("");
    console.log(final);
    console.log(typeof(final));
    return final;        
}

module.exports = addCommas;