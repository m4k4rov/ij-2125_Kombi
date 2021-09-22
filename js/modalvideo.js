const modal = document.getElementById('videoModal');
const btn = document.querySelector('.play');
const closebtn = document.querySelector('.videoclose');
const player = document.getElementById('youtubeVideo');

btn.addEventListener('click',()=> {
    modal.style.display='flex';
    player.src='https://www.youtube.com/embed/BTkCfdhIggc';
});
closebtn.addEventListener('click',()=> {
    modal.style.display='none';
    player.src='';
});
document.addEventListener('click',event => {
    if (event.target == modal) {
        modal.style.display='none';
        player.src='';
    };
});