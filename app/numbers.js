exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return +new Number(num).toString(2).split("").reverse()[bit - 1];
  },

  base10: function(str) {
    return +parseInt(+str, 2).toString(10);
  },

  convertToBinary: function(num) {
    let res = new Number(num).toString(2);

    let arr = res.split("");

    while (arr.length < 8) {
      arr.unshift('0');
    }

    return arr.join("");
  },

  multiply: function(a, b) {
    return +(a * b).toFixed(6)
  }
};
