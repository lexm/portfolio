(function(module) {
  var repoController = {};
  repoController.index = function() {
    $('#gh-repo').show().siblings().hide();
    repos.requestRepos(repoView.index);
  };
})(window);
