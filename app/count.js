exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);
    this.interval = setInterval(() =>{
      start = start + 1;
      console.log(start);
      if (start === end) clearInterval(this.interval);
    }, 100);

    return this;
  },
  cancel: function() {
    clearInterval(this.interval);
  }
};
