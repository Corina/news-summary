(function(exports) {
  function Article(apiUrl, title, content){
    this.id = this.setUniqueId();
    this.apiUrl = apiUrl;
    this.title = title;
    this.content = content;
  }
  
  Article.prototype.idCounter = 0;
  
  Article.prototype.setUniqueId = function () {
    return Article.prototype.idCounter++;
  };
  
  
  exports.Article = Article;
})(this);
