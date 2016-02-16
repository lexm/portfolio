(function(module) {
  var aboutController = {};
  AboutItem.fetchAll(aboutView.initAboutPage);
  aboutController.index = function() {
    AboutItem.fetchAll(aboutView.initAboutPage);
    $('main > section').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
