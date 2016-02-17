(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    // assumes that githubUser and githubToken are defined in githubtoken.js
    $.ajax({
      url: 'https://api.github.com/users/' + githubUser + '/repos?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(repoData, message, xhr) {
        repos.all = $.map(repoData, function(element) {
          return element;
        });
      }
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      console.log('repo with is' + repo[attr]);
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
