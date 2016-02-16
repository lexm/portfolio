(function(module) {
  var entryController = {};

  // Entry.fetchAll(entryView.initIndexPage);

  entryController.index = function() {
    Entry.fetchAll(entryView.initIndexPage);
    $('main > section').hide();
    $('#entries').show();
  };
  module.entryController = entryController;
})(window);
