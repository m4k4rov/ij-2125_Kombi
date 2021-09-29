const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const designTitle = document.querySelectorAll('.design__title');

tabsHandlerElems.forEach((btn, index) => {
    btn.addEventListener('click',()=>{
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));
        btn.classList.add('design-list__item_active');
        tabsContentElems.forEach(content => btn.dataset.tabsHandler == content.dataset.tabsField ? content.classList.remove('hidden') : content.classList.add('hidden'));
        designTitle.forEach(title => title.classList.add('hidden'));
        designTitle[index].classList.remove('hidden');
    });
});
