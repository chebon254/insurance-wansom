/* == Drop Down == */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
var drop = document.getElementById("drop-dwn-menu-id");
function dropOne() {
    if (drop.style.display = "none") {
        drop.style.display = "block";
    }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drp-action-btn')) {
      let dropdowns = document.getElementsByClassName("drop-dwn-menu");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.style.display = "block") {
            openDropdown.style.display = "none";
        }
      }
    }
  }