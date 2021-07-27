
function showCodeHandler(e) {
    let button = e.target;
    let infoBlock = e.target.closest('.info');
    let statusBlock = infoBlock.querySelector('.status');
    statusBlock.style.display = statusBlock.style.display == 'none' ? 'block' : 'none';
    button.textContent = button.textContent == 'Show status code' ? 'Hide status code' : 'Show status code';

}

let events = {
    showCodeHandler,
}

export default events;