var buttons = document.getElementsByClassName("modal-button");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function() {
		let modal_id = buttons[i].getAttribute("data-modal-id")
		document.getElementById(modal_id).style.display = "flex"
	}
}

var close_buttons = document.getElementsByClassName("close-modal");

for (let i = 0; i < close_buttons.length; i++) {
	close_buttons[i].onclick = function() {
		close_buttons[i].parentNode.parentNode.style.display = "none"
	}
}