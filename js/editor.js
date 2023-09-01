function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function run() {
    let htmlCode = document.getElementById("htmlField").value;
    let cssCode = document.getElementById("cssField").value;
    let jsCode = document.getElementById("jsField").value;
    let outCode = document.getElementById("outField").value;

    outField.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outField.contentWindow.eval(jsCode);
}