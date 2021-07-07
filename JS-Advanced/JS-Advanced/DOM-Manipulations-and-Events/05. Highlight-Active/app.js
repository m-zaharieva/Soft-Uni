function focused() {
    // 1. Select elements from DOM
    let inputElements = document.querySelectorAll('input');

    for (const element of inputElements) {
        element.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.className = 'focused';
        })

        element.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.className = '';
        })
    }
}