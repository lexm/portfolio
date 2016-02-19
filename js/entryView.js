(function(module) {

  var entryView = {};

  var render = function(article) {
    var template = Handlebars.compile($('#entry-template').text());
    return template(article);
  };

  entryView.populateFilters = function() {
    var options,
      template = Handlebars.compile($('#option-template').text());
    options = Entry.allSiteNames().map(function(siteName) { return template({val: siteName}); });
    // options = Entry.allSiteNames().map(function(siteName) { return template({val: siteName}); });    console.log('running popFilter; options is ' + options);
    if ($('#title-filter option').length < 2) {
      $('#title-filter').append(options);
    };
  };

  entryView.handleFilters = function() {
    $('#filters').one('change', 'select', function() {
      var resource = this.id.replace('-filter', '');
      page('/' + resource + '/' + $(this).val().replace(/\W+/g, '+'));
    });
  };



  entryView.index = function(entries) {
    $('#entries').show().siblings().hide();
    $('#entries article').remove();
    articles.forEach(function(art) {
      $('#articles').append(render(a));
    });
    entryView.populateFilters();
    entryView.handleFilters();
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
