function validatePassword() {
  var password = document.getElementById("password").value;
  var correctPassword = "stopsmear";

  if (password === correctPassword) {
    document.getElementById("passwordPrompt").classList.add("hidden");
    var contentElement = document.getElementById("content");
    contentElement.classList.remove("hidden");
  } else {
    alert("Invalid password. Please try again.");
  }
}
function searchContent() {
  var keyword = document.getElementById("searchInput").value.toLowerCase();
  var table = document.getElementById("contentTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var rowMatch = false;

    for (var j = 0; j < cells.length; j++) {
      var cellData = cells[j].innerText.toLowerCase();

      if (cellData.includes(keyword)) {
        rowMatch = true;
        cells[j].classList.add("highlight");
      } else {
        cells[j].classList.remove("highlight");
      }
    }

    if (rowMatch) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
function resetSearch() {
  var table = document.getElementById("contentTable");
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    rows[i].style.display = "";
  }
  document.getElementById("searchInput").value = "";
}
function resetPage() {
  var contentElement = document.getElementById("content");
  contentElement.classList.add("hidden");
  var passwordPromptElement = document.getElementById("passwordPrompt");
  passwordPromptElement.classList.remove("hidden");
  document.getElementById("searchInput").value = "";
  resetSearch();
}
function goBack() {
  var passwordPromptElement = document.getElementById("passwordPrompt");
  passwordPromptElement.classList.remove("hidden");
  var contentElement = document.getElementById("content");
  contentElement.classList.add("hidden");
}
