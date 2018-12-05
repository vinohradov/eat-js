exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 300);
    });
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
    }).then(res => res.people.map(item => item.name).sort());
  }
};
