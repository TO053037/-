console.log('spring');

const springBtn = document.querySelector('#spring-switch');
springBtn.addEventListener('click', () => {
    const pictureList = document.getElementById('spring').querySelectorAll("li");
    for (let i = 0; i < pictureList.length; i++) {
        if (pictureList[i].querySelector('img').className === 'show') {
            pictureList[i].querySelector('img').className = 'not-show'
        } else if (pictureList[i].querySelector('img').className === 'not-show'){
            pictureList[i].querySelector('img').className = 'show'
        }
    }

    if (springBtn.innerText === '表示を増やす') {
        springBtn.innerText = '表示を減らす'
    } else {
        springBtn.innerText = '表示を増やす'
    }

    document.querySelector('#spring-title').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

})