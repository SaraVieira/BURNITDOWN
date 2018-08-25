var bkg = chrome.extension.getBackgroundPage();
document.addEventListener("DOMContentLoaded", () => {
	bkg.console.log("extension");
});

console.log(document);
