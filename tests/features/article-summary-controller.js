(function() {
  var articleSummaryController = new ArticleSummaryController();
  it("HeadlinesController sets the HTML content for an article", function() {
    dummyArticle = document.createElement("div");
    dummyArticle.innerHTML = "to be replaced";
    controller.showArticle(4, dummyArticle);
    assertEquals(dummyArticle.innerHTML, contentToHtml);
  });
})();
