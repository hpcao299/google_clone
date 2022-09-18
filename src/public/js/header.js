const header = document.querySelector('.js-header');

document.addEventListener('scroll', e => {
    const scrollTop = document.body.scrollTop;
    if (scrollTop > 110) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});
