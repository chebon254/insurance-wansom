/* ======== Messages Tab ========= */
function openMessaging(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("msgtabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("msgtablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/* ======== || Messages Tab ========= */

/* ===== PROFILE REVEAL ==== */
// Onclick For Menu Bar
// var menuBtn = document.getElementsByClassName('internal-btn');
// var menu = document.getElementsByClassName('inbox-msg-profile');
// menuBtn.onclick = () => {
//     menu.classList.add("active");
//     console.log("Button Clicked");
// }
/* ===== PROFILE REVEAL ==== */