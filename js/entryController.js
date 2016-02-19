(function(module) {
  var entryController = {};
  entryController.index = function() {
    Entry.fetchAll(entryView.initIndexPage);
    $('main > section').hide();
    $('#entries').show();
  };

  entryController.loadBySiteName = function(ctx, next) {
    var siteNameData = function(entriesBySiteName) {
      ctx.entries = entriesBySiteName;
      next();
    };
    Entry.findWhere('siteName', ctx.params.siteName.replace('+', ' '), siteNameData);
  };

  module.entryController = entryController;
})(window);
