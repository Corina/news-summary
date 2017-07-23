(function(){
  var article = new Article(apiUrl, title, content);
  var articleView = new ArticleView(article);
  it("ArticleView return a string of HTML containing the content of the article", function() {
    assertEquals(articleView.getHtml(), contentToHtml);
  });
})();
