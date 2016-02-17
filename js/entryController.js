(function(module) {
  var entryController = {};
  entryController.index = function() {
    Entry.fetchAll(entryView.initIndexPage);
    $('main > section').hide();
    $('#entries').show();
  };
  module.entryController = entryController;
})(window);
