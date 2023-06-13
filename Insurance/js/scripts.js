/* == Drop Down == */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
var drop = document.getElementById("drop-dwn-menu-id");
function dropOne() {
    if (drop.style.display = "none") {
        drop.style.display = "block";
    }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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
/* == || Drop Down == */

/* ======== TABS ========== */
// JavaScript
function changeTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('tab-button');
    var tabContents = document.getElementsByClassName('tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== TABS ========== */

/* ======== SIDE TABS ========== */
// JavaScript
function changeSideTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('side-tab-button');
    var tabContents = document.getElementsByClassName('side-tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== SIDE TABS ========== */


/* ======== POLICIES TABS ========== */
// JavaScript
function changePoliciesTab(event, tabId) {
    // Get all tab buttons and tab contents
    var tabButtons = document.getElementsByClassName('policies-tab-button');
    var tabContents = document.getElementsByClassName('policies-tab-content');

    // Remove 'active' class from all tab buttons and tab contents
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Add 'active' class to the selected tab button and tab content
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
/* ======== ||  POLICIES TABS ========== */

/* ======== POLICIES ACCORDION ========== */

/* ========  || POLICIES ACCORDION ========== */