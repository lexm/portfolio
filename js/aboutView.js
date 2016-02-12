(function(module) {

  var aboutView = {};

  aboutView.initAboutPage = function() {
    AboutItem.all.forEach(function(a) {
      $('#about').append(a.toHtml());
    });
  };

  module.aboutView = aboutView;

})(window);
