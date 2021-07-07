function attachGradientEvents() {
    // 1. Select elements from DOM
    let gradientBoxElement = document.querySelector('#gradient-box');
    let gradientElement = document.querySelector('#gradient');
    let resultElement = document.querySelector('#result');

    gradientElement.addEventListener('mousemove', (e) => {
        let fullWidth = e.currentTarget.clientWidth;
        let currentPosition = e.offsetX;
        let percents = Math.floor((currentPosition / fullWidth) * 100);
        resultElement.textContent = `${percents}%`
    })

    gradientElement.addEventListener('mouseout', (e) => {
        resultElement.textContent = '';
    })

}