(function(module) {

  var entryView = {};

  entryView.initIndexPage = function() {
    var $entries = $('#entries');
    $entries.empty();
    Entry.all.forEach(function(article) {
      $entries.append(article.toHtml());
    });
    $('#count').text(Entry.countWords());
  };

  module.entryView = entryView;

})(window);
