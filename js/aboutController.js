(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    AboutItem.fetchAll(aboutView.initAboutPage);
    $('main > section').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
