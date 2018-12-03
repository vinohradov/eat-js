exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2){
      return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(item => fn.bind(null, item));
  },

  partial: function(fn, str1, str2) {
    return function(punt){
      return fn.call(null, str1, str2, punt);
    }
  },

  useArguments: function() {
    return [].slice.call(arguments).reduce((res, item) => res = res + item, 0);
  },

  callIt: function(fn) {
    return fn.apply(null, [].slice.call(arguments, 1))
  },

  partialUsingArguments: function(fn) {
    let args = [].slice.call(arguments, 1);

    return function(){
      return fn.apply(null, args.concat([].slice.call(arguments)))
    }
  },

  curryIt: function(fn) {
    return function (a){
      return function (b){
        return function (c){
          return fn.call(null, a, b, c);
        }
      }
    }
  }
};
