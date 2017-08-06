(function (exports) {
  var articleListTest = new ArticleList(mockGuardianApiResponse);
  var headlinesPassedLength = mockGuardianApiResponse.response.results.length;

  it('ArticleList has headlines', function () {
    assertEquals(articleListTest.headlines.length, headlinesPassedLength);
  });

  it('ArticleList gets the apiUrls from the JSON response', function () {
    var webUrls = [];
    articleListTest.headlines.forEach(function (article) {
      webUrls.push(article.webUrl);
    })
    assertArrayEquals(webUrls, listWebUrlsFromResponse);
  });

  it('ArticleList gets the titles from the JSON response', function () {
    var titles = [];
    articleListTest.headlines.forEach(function (article) {
      titles.push(article.title);
    })
    assertArrayEquals(titles, listTitlesFromResponse);
  });

  it('ArticleList gets the content from the JSON response', function () {
    var contents = [];
    articleListTest.headlines.forEach(function (article) {
      contents.push(article.content);
    })
    assertArrayEquals(contents, listContentsFromResponse);
  });

  exports.articleListTest = articleListTest;
})(this);
