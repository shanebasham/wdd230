// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function changeNavBarPosition() {
    var navbar = document.getElementById("myNavbar");

    if (navbar.style.position === "sticky") {
        navbar.style.position = "static";
    } else {
        navbar.style.position = "sticky";
    }
}
