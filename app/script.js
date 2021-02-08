let shareBtn = document.querySelector('.share');

function showIcons() {
    shareBtn.classList.toggle('active');
}

shareBtn.addEventListener('click', showIcons);
