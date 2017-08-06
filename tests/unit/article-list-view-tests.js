(function(exports) {
  var articleListView = new ArticleListView(articleListTest);
  var htmlResult = "<ul><li><div><a href=\"#2\">Glasgow’s dark legacy returns as gangland feuds erupt in public killings</a></div></li><li><div><a href=\"#3\">Mother of missing Corrie McKeague may seek injunction over landfill search</a></div></li><li><div><a href=\"#4\">Evacuated tower block residents refuse to move back over safety fears</a></div></li><li><div><a href=\"#5\">Juror forced to leave Old Bailey terror trial after asking if detective was single</a></div></li><li><div><a href=\"#6\">John Joubert lived in the same Hull flat as Philip Larkin | Letters</a></div></li></ul>"

  it("ArticleListView returns a string of HTML that contains the titles of the articles", function() {
    assertEquals(articleListView.getHtml(), htmlResult)
  });

  exports.htmlResult = htmlResult;
})(this);
