const URL_SEARCH = "https://www.perplexity.ai/search?q={query}&copilot=false&s=d"
const searchPanel = document.createElement("div")


if (!window.x) {
  x = {};
}

x.Selector = {};
x.Selector.getSelected = function () {
  var t = '';
  if (window.getSelection) {
    t = window.getSelection();
  } else if (document.getSelection) {
    t = document.getSelection();
  } else if (document.selection) {
    t = document.selection.createRange().text;
  }
  return t;
}

var pageX;
var pageY;

searchPanel.classList.add("search-panel")
searchPanel.innerHTML = "Search with AI"
document.body.appendChild(searchPanel)

let _lastSelection = "";

searchPanel.addEventListener("click", (event) => {
  if (_lastSelection != "") {
    window.open(URL_SEARCH.replace("{query}", _lastSelection), "_blank");
  }
})

document.addEventListener("mouseup", (event) => {
  const selectedText = x.Selector.getSelected();
  if (selectedText != '') {
    _lastSelection = selectedText.toString();
    searchPanel.style.display = "block";
    searchPanel.style.top = event.pageY + "px";
    searchPanel.style.left = event.pageX + "px";
  } else {
    searchPanel.style.display = "none";
  }
})
