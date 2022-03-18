console.log('fall');

const fallBtn = document.querySelector('#fall-switch');
fallBtn.addEventListener('click', () => {
    const pictureList = document.getElementById('fall').querySelectorAll("li");
    for (let i = 0; i <pictureList.length; i ++) {
        if (pictureList[i].className === 'show') {
            pictureList[i].className = 'not-show'
        } else if (pictureList[i].className === 'not-show'){
            pictureList[i].className = 'show'
        }
    }

    if (fallBtn.innerText === '表示を増やす') {
        fallBtn.innerText = '表示を減らす'
    } else {
        fallBtn.innerText = '表示を増やす'
    }

    document.querySelector('#fall-title').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

})
