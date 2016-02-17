(function(module) {
  var repoView = {};

  var ui = function() {
    var $gh-repo = $('#gh-repo');
    $gh-repo.find('ul').empty();
    $gh-repo.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('repo name: <a href="' + repo.html.url +
           '">' + repo.full_name + '</a');
  };

  repoView.index = function() {
    ui();
    $('#gh-repo ul').append(
      repo.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
