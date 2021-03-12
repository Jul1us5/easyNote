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

// Data

let HTML = `<div class="table">
                <div class="name">
                    <img src="./style/img/user.svg" alt="avatar">
                    <span>Julius</span>
                </div>
                <div class="all">
                    <div class="row">Resp api</div>
                    <div class="row">
                        <li>Let see how its works</li>
                    </div>
                    <div class="row">2021.10.12</div>

                </div>
            </div>`;

const url = "https://jul1u5.herokuapp.com/notes";

axios.get(url).then((resp) => {
    let name = resp.data;
    console.log(name);
});



// https://jul1u5.herokuapp.com/notes