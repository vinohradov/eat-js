exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel: function(str) {
    return /.+[aeiou]$/.test(str.toLowerCase())
  },

  captureThreeNumbers: function(str) {
    let matches = str.match(/[0-9]{3}/);

    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
  },

  isUSD: function(str) {
    return /^\$-?([1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d{2})?$/.test(str);
  }
};
