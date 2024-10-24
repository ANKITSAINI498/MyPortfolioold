document.getElementById('moreButton').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
