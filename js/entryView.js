(function(module) {

  var entryView = {};

  entryView.populateFilters = function() {
    var options,
      template = Handlebars.compile($('#entry-template').text());
    options = Entry.allSiteNames().map(function(siteName) { return template({val: author}); });
    if ($('#entry-filter option').length < 2) {
      $('#entry-filter').append(options);
    };
  };

  entryView.initIndexPage = function() {
    var $entries = $('#entries');
    $('#entries article').empty();
    Entry.all.forEach(function(article) {
      $entries.append(article.toHtml());
    });
    $('#count').text(Entry.countWords());
  };

  module.entryView = entryView;

})(window);
