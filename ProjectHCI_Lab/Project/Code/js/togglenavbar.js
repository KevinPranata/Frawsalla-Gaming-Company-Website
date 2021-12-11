function toggleNavbar() {
    let nav = document.getElementById("header-nav");

    if (nav.style.display == '' || nav.style.display == 'none') {
        nav.style.display = "flex";
    }
    else {
        nav.style.display = '';
    }
}