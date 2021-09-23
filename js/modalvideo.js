const videomodal = document.getElementById('videoModal');
const btn = document.querySelector('.play');
const closebtn = document.querySelector('.videoclose');
const player = document.getElementById('youtubeVideo');

btn.addEventListener('click',()=> {
    videomodal.style.display='flex';
    player.src='https://www.youtube.com/embed/BTkCfdhIggc';
});

videomodal.addEventListener('click',event => {
    if (event.target == videomodal || event.target == closebtn) {
        videomodal.style.display='none';
        player.src='';
    };
});