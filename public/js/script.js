const modalBG = document.getElementById('modal-bg');
const modal = document.getElementById('modal');





const openModal = () => {
    modalBG.style.display = 'flex';

}



const closeModal = (event) => {
    if (event.target.classList.contains('modal-bg')){
        modalBG.style.display = 'none'
    }

}







const mainInfo = document.getElementById('main-info')
const logo = 'PROFESSIONAL CAR'
let currentLetter = 0;   

const addLetter = () => {
    if (currentLetter < logo.length) {
        mainInfo.innerHTML += logo[currentLetter]
        currentLetter++;
        setTimeout(addLetter, 200);
    } else {
        currentLetter = 0;
        setTimeout(removeLetter, 1000);
    }

}

const removeLetter = () => {
    let currentLength = mainInfo.innerHTML.length;
    if (currentLength != 0 ) {
        mainInfo.innerHTML = mainInfo.innerHTML.slice(0, currentLength-1);
        setTimeout(removeLetter, 150)
    } else {
        setTimeout(addLetter, 100)
    }
}

addLetter();


const borderOnOff = () => {
    if (mainInfo.style.borderColor == 'rgb(0, 0, 0)') {
        mainInfo.style.borderColor = 'transparent';
    } else {
        mainInfo.style.borderColor = '#000'
    }
}

setInterval(borderOnOff, 400)