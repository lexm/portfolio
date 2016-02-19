page('/',
  entryController.loadAll,
  entryController.index);
page('/about', aboutController.index);
page('/repos', repoController.index);
page('/portfolio', '/');
page('/title', '/');
page('/title/:siteName',
  entryController.loadBySiteName,
  entryController.index);
page();
