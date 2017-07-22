(function() {
  var articleList = new ArticleList(mockGuardianApiResponse);
  var headlinesPassedLength = mockGuardianApiResponse.response.results.length;
  it("ArticleList module is initialized with a JSON response", function() {
    assertEquals(articleList.headlines.length, headlinesPassedLength);
  });
})();
