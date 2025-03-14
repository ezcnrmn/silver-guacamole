(function (window, document) {
	window.onload = init;

	function init() {
		const button = document.getElementById("button");
		const paragraph = document.getElementById("paragraph");

		const OPEN_CLASS = "paragraph_opened";
		let toggled = false;

		button.addEventListener("click", () => {
			if (toggled) {
				paragraph.classList.remove(OPEN_CLASS);
			} else {
				paragraph.classList.add(OPEN_CLASS);
			}
			toggled = !toggled;
		});
	}
})(window, document);
