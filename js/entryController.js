(function(module) {
  var entryController = {};
  entryController.index = function(ctx, next) {
    entryView.index(ctx.entries);
  };

  entryController.loadBySiteName = function(ctx, next) {
    var siteNameData = function(entriesBySiteName) {
      ctx.entries = entriesBySiteName;
      next();
    };
    Entry.findWhere('sitename', ctx.params.siteName.replace('+', ' '), siteNameData);
  };

  entryController.loadAll = function(ctx, next) {
    var entryData = function() {
      ctx.entries = Entry.all;
      next();
    };

    if(Entry.all.length) {
      ctx.entries = Entry.all;
      next();
    } else {
      Entry.fetchAll(entryData);
    }
  };

  module.entryController = entryController;
})(window);
