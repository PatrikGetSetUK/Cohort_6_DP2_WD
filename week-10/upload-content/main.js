// Solution 1 - Without using jQuery
// document.addEventListener("DOMContentLoaded", function () {
//   contentUpload();
// });

// function contentUpload() {
//   document.querySelector("nav").innerHTML = "<p>Loading navigation...</p>";
//   document.querySelector("footer").innerHTML = "<p>Loading footer...</p>";

//   function loadContent(selector, url) {
//     fetch(url)
//       .then((response) => response.text())
//       .then((data) => {
//         document.querySelector(selector).innerHTML = data;
//       })
//       .catch((error) => {
//         console.log("Error loading contentL:", error);
//       });
//   }

//   loadContent("nav", "./components/navbar.html");
//   loadContent("footer", "./components/footer.html");
// }

// Solution 2 - with jQuery
function contentUpload() {
  $("nav").html("<p>Loading navigation...</p>");
  $("footer").html("<p>Loading footer...</p>");

  $("nav").load("./components/navbar.html");
  $("footer").load("./components/footer.html");
}

$(document).ready(function () {
  contentUpload();
});
