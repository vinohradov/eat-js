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

  permute: function _permute(arr) {
    let s = arr.join('');

    return (function _permute(str, now='', arr=[]){
      if (str){
        for (let i = 0; i < str.length; i++){
            _permute(str.slice(0, i) + str.slice(i+1), now + str[i], arr);
        }
      } else {
        if (!arr.includes(now)) arr.push(now.split(""));
      }
      return arr;
    })(s);
  },

  fibonacci: function _fibonacci(n) {
    return n <= 1 ? n : _fibonacci(n - 1) + _fibonacci(n - 2);
  },

  validParentheses: function _nPair(n) {
    if (n === 0) return [""];

    const res = [];

    for (let i = 0; i < n; ++i){
      let lefts = _nPair(i);
      let rights = _nPair(n - i - 1);

      for (let l = 0; l < lefts.length; ++l){
        for (let r = 0; r < rights.length; ++r){
          res.push("(" + lefts[l] + ")" + rights[r])
        }
      }
    }

    return res;
  }
};
