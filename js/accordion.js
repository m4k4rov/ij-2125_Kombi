const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((item, indexbtn) => {
    item.addEventListener('click', (event) => {
        btns.forEach((item, index) => {
            if (index!=indexbtn) item.classList.remove('feature__link_active');
        });
        item.classList.toggle('feature__link_active');

        lists.forEach((item, index) => {
            if (index!=indexbtn) item.classList.add('hidden');
        });
        lists[indexbtn].classList.toggle('hidden');
    })
})