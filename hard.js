function changeColor(className) {
    let bodyElement = document.getElementById("bg");
    bodyElement.classList = ["bgWhite", "bgRed"];
    bodyElement.classList.toggle(className);
}