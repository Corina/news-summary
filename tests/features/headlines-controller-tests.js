(function() {
var controller = new HeadlinesController(articleListTest);

it("HeadlinesController sets the HTML content for headlines element", function() {
dummyHeadlines = document.createElement("div");
dummyHeadlines.innerHTML = "to be replaced";
controller.setHtmlToElement(dummyHeadlines);
assertEquals(dummyHeadlines.innerHTML, htmlResult);
});

it("HeadlinesController sets the HTML content for an article", function() {
dummyArticle = document.createElement("div");
dummyArticle.innerHTML = "to be replaced";
controller.showArticle(4, dummyArticle);
assertEquals(dummyArticle.innerHTML, contentToHtml);
});

})();
