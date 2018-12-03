exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const files = [];

    const dirictory = dirName ? data.files.find(item => item.dir === dirName).files : data.files;

    function itarate(arr){
      arr.forEach(item => {
        if (typeof item === 'object'){
          itarate(item.files);
        } else if (typeof item === 'string') {
          files.push(item);
        }
      })
    }

    itarate(dirictory);

    return files;
  },

  permute: function(arr) {

  },

  fibonacci: function _fibonacci(n) {
    return n <= 1 ? n : _fibonacci(n - 1) + _fibonacci(n - 2);
  },

  validParentheses: function(n) {

  }
};
