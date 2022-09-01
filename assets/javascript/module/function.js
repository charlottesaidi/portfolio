export function switchTheme(event) {
    if (event.target.checked) {
        document.body.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");
    }
}