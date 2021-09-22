const modal = document.getElementById('videoModal');
const btn = document.querySelector('.play');
const closebtn = document.querySelector('.videoclose');

btn.addEventListener('click',()=> modal.style.display='flex');
closebtn.addEventListener('click',()=> modal.style.display='none');
document.addEventListener('click',event => {
    if (event.target == modal) modal.style.display='none';
});