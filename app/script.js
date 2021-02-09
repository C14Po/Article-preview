let shareBtn = document.querySelector('.share');
let icons = document.querySelector('.buttons');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    icons.classList.toggle('active');
});


