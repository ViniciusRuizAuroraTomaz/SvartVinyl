const menuToggle = document.querySelector('#menu-toggle');
const menuDropdown = document.querySelector('#main-menu');

if (menuToggle && menuDropdown) {
    menuToggle.addEventListener('click', () => {
        menuDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!menuDropdown.contains(target) && !menuToggle.contains(target)) {
            menuDropdown.classList.remove('open');
        }
    });
}

const buttonFilter = document.getElementById("btn-filter");
const dropdownFilter = document.getElementById("dropdown-filter");

if (buttonFilter && dropdownFilter) {
    buttonFilter.addEventListener('click', () => {
        dropdownFilter.classList.toggle('open');
    });
}
