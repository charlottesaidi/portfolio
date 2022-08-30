(function() {
    // Switch theme light/dark
    
    var toggleSwitch = document.getElementById("togButton");

    toggleSwitch.addEventListener("change", switchTheme, false);

    //  Keep theme chosen in memory
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.setAttribute("theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }

    // No switching on my admin login page
    if(document.querySelector('.container_login')) { 
        var toggleSwitch = document.createElement('input');
        toggleSwitch.setAttribute('id', 'togButton');
        toggleSwitch.classList.add('hidden');
    }

})();

// FUNCTIONS
function switchTheme(event) {
    if (event.target.checked) {
        document.body.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");
    }
}