console.log('summer');

const summerBtn = document.querySelector('#summer-switch');
summerBtn.addEventListener('click', () => {
    const pictureList = document.getElementById('summer').querySelectorAll("li");
    for (let i = 0; i <pictureList.length; i ++) {
        if (pictureList[i].className === 'show') {
            pictureList[i].className = 'not-show'
        } else if (pictureList[i].className === 'not-show'){
            pictureList[i].className = 'show'
        }
    }

    if (summerBtn.innerText === '表示を増やす') {
        summerBtn.innerText = '表示を減らす'
    } else {
        summerBtn.innerText = '表示を増やす'
    }

    document.querySelector('#summer-title').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

})
