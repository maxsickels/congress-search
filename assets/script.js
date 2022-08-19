var userContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");

function redirectPage() {
  //Capture User Input
  var userQuery = document.getElementById("user-query").value;
  var userFormat = document.getElementById("format-select").value;
  //Build the path
  var resultsPage =
    "./search-results.html" + "?q=" + userQuery + "&format=" + userFormat;
  document.location.replace(resultsPage);
  //Location. replace with^^
}
fetchButton.addEventListener("click", redirectPage);
