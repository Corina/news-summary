(function(exports) {

  function ArticleSummaryController(articleElement){
    this.articleElement = articleElement;
    var _this = this;
    window.addEventListener("hashchange", function() {
      _this.showArticleForCurrentPage(articleElement);
    });
  }

  ArticleSummaryController.prototype.showArticleForCurrentPage = function(element) {
    this.showArticle(getArticleFromUrl(window.location), element);
  };

  function getArticleFromUrl(location) {
    return location.hash.split("#")[1];
  };

  ArticleSummaryController.prototype.showArticle = function(articleId, element) {
    var webUrl = articleList.getWebUrlMatchingId(articleId);
    this.requestSummary(getUrlForRequest(webUrl), this.articleElement);
  };

  function getUrlForRequest(webUrl) {
    return "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + webUrl;
  }

  ArticleSummaryController.prototype.requestSummary = function(url, element) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var articleView = new ArticleView(JSON.parse(this.response));
        element.innerHTML = articleView.getHtml();
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  exports.ArticleSummaryController = ArticleSummaryController;

})(this);
