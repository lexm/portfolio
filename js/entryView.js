(function(module) {

  var entryView = {};

  entryView.initIndexPage = function() {
    var $entries = $('#entries');
    $entries.empty();
    Entry.all.forEach(function(a) {
      $entries.append(a.toHtml());
    });
    $('#count').text(Entry.countWords());
  };

  module.entryView = entryView;

})(window);
