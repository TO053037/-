console.log('winter');

const winterBtn = document.querySelector('#winter-switch');
winterBtn.addEventListener('click', () => {
    const pictureList = document.getElementById('winter').querySelectorAll("li");
    for (let i = 0; i <pictureList.length; i ++) {
        if (pictureList[i].className === 'show') {
            pictureList[i].className = 'not-show'
        } else if (pictureList[i].className === 'not-show'){
            pictureList[i].className = 'show'
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
