const background = document.querySelector('.background');
const passwordEl = document.getElementById('password');
const p = document.querySelector('.text-sm');


passwordEl.addEventListener('input', (e) => {
    let passLength = e.target.value.trim().length;
    let blurr = 20 - passLength * 2;
    
    if (blurr > 0) {
        background.style.filter = `blur(${blurr}px)`;
    } else {

        p.innerText = 'Strong Password';
        p.style.color = 'green';

    }
})