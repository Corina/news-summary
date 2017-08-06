(function () {
  var article = new Article(webUrl, title, content);

  it('Article model is initialized with webUrl, title and content', function () {
    assertEquals(article.webUrl, webUrl);
    assertEquals(article.title, title);
    assertEquals(article.content, content);
  });

  it('Article has an unique id', function () {
    var article2 = new Article('test url', 'test title', 'test content')
    assertEquals(article.id, 0);
    assertEquals(article2.id, 1);
  });
})();
