// Press button

const arrow = document.querySelector('.on');
const feed = document.querySelector('.feed');
let animation = document.querySelector('.animation__cross');

arrow.addEventListener('click', () => {

    if (feed.className === 'feed') {
        feed.classList.add('off');
        animation.classList.remove('animation__cross');
        animation.classList.add('animation__open');

    } else {
        feed.classList.remove('off');
        animation.classList.add('animation__cross');
        animation.classList.remove('animation__open');
    }

});