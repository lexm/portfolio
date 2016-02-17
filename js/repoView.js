(function(module) {
  var repoView = {};

  var ui = function() {
    var $ghRepo = $('#gh-repo');
    $ghRepo.find('ul').empty();
    $ghRepo.show().siblings().hide();
  };

  var render = function(repo) {
    console.log('rendering ' + $('<li>'));
    // .html('repo name: <a href="' + repo.html_url +
    //        '">' + repo.full_name + '</a'));
    return $('<li>')
      .html('repo name: <a href="' + repo.html_url + '">' + repo.full_name + '</a');
  };

  repoView.index = function() {
    ui();
    $('#gh-repo ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
