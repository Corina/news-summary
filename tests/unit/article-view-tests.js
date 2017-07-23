(function(){
  var article = new Article(webUrl, title, content);
  var articleView = new ArticleView(article);
  it("ArticleView return a string of HTML containing the content of the article", function() {
    assertEquals(articleView.getHtml(), contentToHtml);
  });
})();
