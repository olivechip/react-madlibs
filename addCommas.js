function addCommas(val) {
    const str = val.toString();
    let neg;
    if (str[0] === "-"){
        neg = true;
    } str = str.replace("-", "");
    const strArr = str.split('').reverse();
    let count = 1;
    let result = []; 
    for (let x of strArr){
      if (count % 4 !== 0){
        result.unshift(x);
      } else {
        result.unshift(",");
        result.unshift(x);
        count++;
      }
      count++;
    }
    neg ? result.unshift("-") : result;
    const final = result.join("");
    console.log(final)
    console.log(typeof(final))
    return final;
}


module.exports = addCommas;