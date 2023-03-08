const sideButton = document.getElementById("side-button");
const sidebar = document.querySelectorAll(".sidebar");
const anchors = document.querySelectorAll(".sidebar a");
const content = document.querySelectorAll(".content");
var sideToggle = false;

sideButton.addEventListener("click", function () {
    if (sideToggle) {
        sideButton.style.transform = 'translateX(0vw) rotate(0deg)';
        sideToggle = false;
        document.getElementById("rectangles").style.width = '0';
        document.getElementById("rec2").style.width = '0';

        sidebar.forEach(element => {
            element.style.width = '0';
        });
        anchors.forEach(element => {
            element.style.display = 'none';
        });
        content.forEach(element => {
            element.style.transform = 'translateX(0)';
        });
    }
    else {
        sideButton.style.transform = 'translateX(10vw) rotate(180deg)';
        sideToggle = true;
        document.getElementById("rectangles").style.width = '10vw';
        document.getElementById("rec2").style.width = '10vw';

        sidebar.forEach(element => {
            element.style.width = '10vw';
        });
        anchors.forEach(element => {
            element.style.display = 'block';
        });
        content.forEach(element => {
            element.style.transform = 'translateX(10vw)';
        });
    }
});