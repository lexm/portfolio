(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/users/lexm/repos?per_page=100&sort=updated',
      type: 'GET',
      success: function(repoData, message, xhr) {
        repos.all = $.map(repoData, function(element) {
          return element;
        });
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
