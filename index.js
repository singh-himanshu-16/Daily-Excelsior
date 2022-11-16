// This is a comment
const searchBar = document.querySelector('input[name="search"]');
const searchIcon = document.querySelector("#search_icon");

searchIcon.addEventListener("click", () => {
	showSearchBar();
});

function showSearchBar() {
	if (searchBar.style.display == "none")
		searchBar.style.display = "inline-block";
	else searchBar.style.display = "none";
}

const dateEl = document.querySelector("#Date span");
const timeEl = document.querySelector("#Time span");

function updateDateTime() {
	let time = new Date().toLocaleTimeString();
	timeEl.textContent = time;

	let date = new Date().toLocaleDateString();
	dateEl.textContent = date;
}

setInterval(updateDateTime, 1000);