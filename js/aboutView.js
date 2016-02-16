(function(module) {

  var aboutView = {};

  aboutView.initAboutPage = function() {
    console.log('init about page');
    var $about = $('#about');
    $about.empty();
    AboutItem.all.forEach(function(a) {
      $about.append(a.toHtml());
    });
  };

  module.aboutView = aboutView;

})(window);
