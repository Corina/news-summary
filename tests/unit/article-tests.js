(function() {
  var article = new Article(apiUrl, title, content);
  
  it("Article model is initialized with apiUrl, title and content", function(){
    assertEquals(article.apiUrl, apiUrl);
    assertEquals(article.title, title);
    assertEquals(article.content, content);
  });
})();
