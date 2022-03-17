console.log('winter');

const winterBtn = document.querySelector('#winter-switch');
winterBtn.addEventListener('click', () => {
    const pictureList = document.getElementById('winter').querySelectorAll("li");
    for (let i = 0; i <pictureList.length; i ++) {
        if (pictureList[i].querySelector('img').className === 'show') {
            pictureList[i].querySelector('img').className = 'not-show'
        } else if (pictureList[i].querySelector('img').className === 'not-show'){
            pictureList[i].querySelector('img').className = 'show'
        }
    }

    if (winterBtn.innerText === '表示を増やす') {
        winterBtn.innerText = '表示を減らす'
    } else {
        winterBtn.innerText = '表示を増やす'
    }

    document.querySelector('#winter-title').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

})
