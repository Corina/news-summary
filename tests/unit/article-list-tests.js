(function() {
  var articleList = new ArticleList(mockGuardianApiResponse);
  var headlinesPassedLength = mockGuardianApiResponse.response.results.length;
  
  
  
  it("ArticleList has headlines", function() {
    assertEquals(articleList.headlines.length, headlinesPassedLength);
  });
  
  it("ArticleList gets the apiUrls from the JSON response", function() {
    var apiUrls = [];
    articleList.headlines.forEach(function (article) {
      apiUrls.push(article.apiUrl);
    })
    assertArrayEquals(apiUrls, listApiUrlsFromResponse);
  });
  
  it("ArticleList gets the titles from the JSON response", function() {
    var titles = [];
    articleList.headlines.forEach(function (article) {
      titles.push(article.title);
    })
    assertArrayEquals(titles, listTitlesFromResponse);
  });
  
  it("ArticleList gets the content from the JSON response", function() {
    var contents = [];
    articleList.headlines.forEach(function (article) {
      contents.push(article.content);
    })
    assertArrayEquals(contents, listContentsFromResponse);
  });
  
})();
