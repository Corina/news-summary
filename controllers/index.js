
window.onload = function () {
  function handleGuardianApiResponse (response) {
    articleList = new ArticleList(response);
    controller = new HeadlinesController(articleList)
    headlines = document.getElementById('headlines');
    controller.setHtmlToElement(headlines);
    articleElement = document.getElementById('article');
  }

  if (window.location.href.substring(0, 8) == 'file:///') {
    handleGuardianApiResponse(mockGuardianApiResponse);

    var articleSummaryController = new ArticleSummaryController(articleElement);
  } else {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        handleGuardianApiResponse(JSON.parse(this.response));
        var articleSummaryController = new ArticleSummaryController(articleElement);
      }
    };
    xhttp.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body', true);
    xhttp.send();
  }
}
