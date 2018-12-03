exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.findIndex(i => i === item),

  sum: function(arr) {
    return arr.reduce((res, item) => res = res + item );
  },

  remove: function(arr, item) {
    return arr.filter(i => i !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }

    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    return arr.reduce((res, i) => res = i === item ? res + 1 : res, 0);
  },

  duplicates: function(arr) {
    const res = [];

    arr.forEach ((item, index) => {
      let clone = arr.slice(0);

      clone.splice(index, 1);

      if (clone.indexOf(item) !== -1 && res.indexOf(item) === -1) res.push(item);
    });

    return res;
  },

  square: function(arr) {
    return arr.map( item => item * item );
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((res, item, index) => {
      if (item === target) res.push(index);

      return res;
    }, [])
  }
};
