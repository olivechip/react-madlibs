function addCommas(val) {
    const str = val.toString();
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
    const final = result.join("");
    return final;
}


module.exports = addCommas;