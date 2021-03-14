// Press button



const arrow = document.querySelector('.on');
const feed = document.querySelector('.feed');
const section = document.querySelector('.main');
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
            </div>
            <div class="table">
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
            </div>
            <div class="table">
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
            </div>
            <div class="table">
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
            </div>
            <div class="table">
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

feed.insertAdjacentHTML('afterbegin', HTML);
section.insertAdjacentHTML('afterbegin', HTML);

const fetchUsers = () => {
    axios.get('https://jul1u5.herokuapp.com/notes')
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error(error));
};

fetchUsers();




// https://jul1u5.herokuapp.com/notes