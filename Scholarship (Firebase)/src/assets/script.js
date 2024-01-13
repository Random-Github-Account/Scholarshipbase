const btnElList = document.querySelectorAll('.dashboard');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special');
        btnEl.classList.add('special');
    })
})