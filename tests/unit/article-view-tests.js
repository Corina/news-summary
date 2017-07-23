(function(){
  var article = new Article(webUrl, title, content);
  var articleView = new ArticleView(mockAylienResponse);
  it("ArticleView return a string of HTML containing the summary of the article", function() {
    assertEquals(articleView.getHtml(), contentToHtml);
  });
})();
