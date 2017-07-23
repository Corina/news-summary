(function(exports) {
var articleList;
function HeadlinesController(articleList) {
this.articleList = articleList;
articleList = articleList;
this.articleListView = new ArticleListView(this.articleList);
}

HeadlinesController.prototype.setHtmlToElement = function (element) {
element.innerHTML = this.articleListView.getHtml();
};

HeadlinesController.prototype.showArticleContentOnClick = function(element) {
var _this = this;
window.addEventListener("hashchange", function() {
_this.showArticleForCurrentPage(element);
})
};

HeadlinesController.prototype.showArticleForCurrentPage = function(element) {
this.showArticle(getArticleFromUrl(window.location), element);
};

function getArticleFromUrl(location) {
console.log(location.hash.split("#")[1]);
return location.hash.split("#")[1];
};


HeadlinesController.prototype.getArticleMatchingId = function(articleId) {
var articleMatching;
this.articleList.headlines.forEach(function(article) {
if (article.id == articleId) {
articleMatching = article;
}
});
return articleMatching;
};

HeadlinesController.prototype.showArticle = function(articleId, element) {
var article = this.getArticleMatchingId(articleId);
var articleView = new ArticleView(article);
element.innerHTML = articleView.getHtml();
};

exports.HeadlinesController = HeadlinesController;

})(this);
