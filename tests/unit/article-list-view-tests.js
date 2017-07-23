
(function() {
  var articleListView = new ArticleListView(articleList);
  
  it("ArticleListView returns a string of HTML that contains the titles of the articles", function() {
    assertEquals(articleListView.getHtml(), htmlResult)
  } );
})();
