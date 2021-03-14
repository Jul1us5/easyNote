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

let HTML = '';

axios.get('https://jul1u5.herokuapp.com/notes')
    .then(response => {

        let datas = response.data.reverse();
        for (let i = 0; i < 5; i++) {

            HTML += `<div class="table">
                            <div class="name">
                                <img src="./style/img/user.svg" alt="avatar">
                                <span>${datas[i].content}</span>
                            </div>
                            <div class="all">
                                <div class="row">${datas[i].title}</div>
                                <div class="row">
                                    <li>${datas[i].about}</li>
                                </div>
                                <div class="row">${datas[i].createdAt}</div>

                            </div>
                        </div>`;

        }

        feed.insertAdjacentHTML('afterbegin', HTML);
        section.insertAdjacentHTML('afterbegin', HTML);
    }).catch(error => console.error(error));