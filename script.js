function insert(num) {
	let result = document.getElementById("results");
	result.innerHTML += num;
}

function clean () {
	document.getElementById("results").innerHTML = "";
}

function calculate() {
	let result = document.getElementById("results").innerHTML;
	if (result) {
		document.getElementById("results").innerHTML = eval (result);
	}
}