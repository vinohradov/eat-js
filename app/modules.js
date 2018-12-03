exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    function MyModule(name, greeting){
      this.name = name;
      this.greeting = greeting;
    }

    MyModule.prototype.sayIt = function(){
      return this.greeting + ', ' + this.name;
    }

    return new MyModule(str2, str1);
  }
};
