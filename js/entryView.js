(function(module) {

  var entryView = {};

  entryView.populateFilters = function() {
    var options,
      template = Handlebars.compile($('#option-template').text());
    options = Entry.allSiteNames().map(function(siteName) { return template({val: siteName}); });
    // options = Entry.allSiteNames().map(function(siteName) { return template({val: siteName}); });    console.log('running popFilter; options is ' + options);
    if ($('#title-filter option').length < 2) {
      $('#title-filter').append(options);
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
