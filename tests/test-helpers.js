var webUrl = "https://www.theguardian.com/uk-news/2017/jul/21/john-joubert-lived-in-the-same-hull-flat-as-philip-larkin";
var title = "John Joubert lived in the same Hull flat as Philip Larkin | Letters";
var content = "<p>I am very interested to hear that Philip Larkin’s flat is being honoured with a blue plaque (<a href=\"https://www.theguardian.com/uk-news/2017/jul/17/hull-landmarks-to-be-listed-boost-city-of-culture-status\" title=\"\">Report</a>, 17 July).</p> <p>What people should also know is that the composer John Joubert lived in this same flat in the 1960s when a lecturer in music at Hull University and is a composer of 160 works including two symphonies, violin, piano, cello, oboe and bassoon concertos, and seven operas. He has a major choral output including Christmas carols.</p> <p>His most famous carol is Torches, which was written for his wife who was teaching at a school in Hull. Joubert is 90 and still composing. I would like to suggest that another blue plaque be added to the same building to celebrate its other famous inhabitant.<br><strong>Linda Gresham</strong><br><em>Birmingham </em></p> <p><strong><em>• Join the debate – email </em></strong><a href=\"mailto:guardian.letters@theguardian.com\" title=\"\"><strong><em>guardian.letters@theguardian.com</em></strong></a></p> <p><strong><em>• Read more Guardian letters – </em></strong><a href=\"https://www.theguardian.com/tone/letters\" title=\"\"><strong><em>click here to visit gu.com/letters</em></strong></a></p>"

var contentToHtml = "<div><p>I am very interested to hear that Philip Larkin’s flat is being honoured with a blue plaque (<a href=\"https://www.theguardian.com/uk-news/2017/jul/17/hull-landmarks-to-be-listed-boost-city-of-culture-status\" title=\"\">Report</a>, 17 July).</p> <p>What people should also know is that the composer John Joubert lived in this same flat in the 1960s when a lecturer in music at Hull University and is a composer of 160 works including two symphonies, violin, piano, cello, oboe and bassoon concertos, and seven operas. He has a major choral output including Christmas carols.</p> <p>His most famous carol is Torches, which was written for his wife who was teaching at a school in Hull. Joubert is 90 and still composing. I would like to suggest that another blue plaque be added to the same building to celebrate its other famous inhabitant.<br><strong>Linda Gresham</strong><br><em>Birmingham </em></p> <p><strong><em>• Join the debate – email </em></strong><a href=\"mailto:guardian.letters@theguardian.com\" title=\"\"><strong><em>guardian.letters@theguardian.com</em></strong></a></p> <p><strong><em>• Read more Guardian letters – </em></strong><a href=\"https://www.theguardian.com/tone/letters\" title=\"\"><strong><em>click here to visit gu.com/letters</em></strong></a></p></div>"

var htmlResult = "<ul><li><div><a href=\"#0\">Glasgow’s dark legacy returns as gangland feuds erupt in public killings</a></div></li><li><div><a href=\"#1\">Mother of missing Corrie McKeague may seek injunction over landfill search</a></div></li><li><div><a href=\"#2\">Evacuated tower block residents refuse to move back over safety fears</a></div></li><li><div><a href=\"#3\">Juror forced to leave Old Bailey terror trial after asking if detective was single</a></div></li><li><div><a href=\"#4\">John Joubert lived in the same Hull flat as Philip Larkin | Letters</a></div></li></ul>"

var listWebUrlsFromResponse = [];
var listTitlesFromResponse = [];
var listContentsFromResponse = [];

function getWebUrlsFromResponse(apiResponse) {
  apiResponse.response.results.forEach(function(result) {
    listWebUrlsFromResponse.push(result.webUrl);
  })
}

function getTitlesFromResponse(apiResponse) {
  apiResponse.response.results.forEach(function(result) {
    listTitlesFromResponse.push(result.webTitle);
  })
}

function getContentsFromResponse(apiResponse) {
  apiResponse.response.results.forEach(function(result) {
    listContentsFromResponse.push(result.fields.body);
  })
}

getWebUrlsFromResponse(mockGuardianApiResponse);
getTitlesFromResponse(mockGuardianApiResponse);
getContentsFromResponse(mockGuardianApiResponse);

var articleListTest = new ArticleList(mockGuardianApiResponse);
