const reverseString = function(string) {
    const num = string.length;
    let array = [];
    for(let i = num ; i>0 ; i--){
        array[num - i] = string.charAt(i-1);
    }

    return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
