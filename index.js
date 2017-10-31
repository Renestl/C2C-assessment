document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("change-name").addEventListener("click", replaceLogo);
});

function replaceLogo() {
	(document.getElementById("change-name").innerHTML == "facebook") ? document.getElementById("change-name").innerHTML = "Jennifer Currie": document.getElementById("change-name").innerHTML = "facebook";
};
