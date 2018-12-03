exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    const def = $.Deferred();

    setTimeout(function(){
      def.resolve(value);
    }, 300);

    return def.promise();
  },

  manipulateRemoteData: function(url) {
    return $.ajax(url).then(function(res, status){
      if (status === 'success') {
        return res.people.map(item => item.name).sort();
      }
    });
  }
};
