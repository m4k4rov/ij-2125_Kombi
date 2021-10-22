export default function smooth() {
    const menuList = document.querySelectorAll('.menu-list__link');
    const mainScroll = document.querySelector('.main__scroll');
    const newArray = [...menuList, mainScroll];

    newArray.forEach(menuItem => {
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            const ID = event.target.getAttribute('href').substr(1);
            document.getElementById(ID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    });
}
