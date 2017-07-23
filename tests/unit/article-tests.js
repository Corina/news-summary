(function() {
  var article = new Article(apiUrl, title, content);
  
  it("Article model is initialized with apiUrl, title and content", function(){
    assertEquals(article.apiUrl, apiUrl);
    assertEquals(article.title, title);
    assertEquals(article.content, content);
  });
  
  it("Article has an unique id", function() {
    var article2 = new Article("test url", "test title", "test content")
    assertEquals(article.id, 5);
    assertEquals(article2.id, 6);
  });
})();
