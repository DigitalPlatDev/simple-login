var date = new Date();
var hour = date.getHours();
dark = hour < 18 && hour > 6? false : true;
document.oncontextmenu = function () { return false; };
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
};
function setMode() {
    if (dark) {
        document.getElementById("dark_mode").href="./css/darkmode.css";
    } else {
        document.getElementById("dark_mode").href="";
    }
}
function switchMode() {
    if (!dark) {
        document.getElementById("dark_mode").href="./css/darkmode.css";
        dark = true;
    } else {
        document.getElementById("dark_mode").href="";
        dark = false;
    }
}