function showDetailsHandler(e) {
    let contactCard = e.target.closest('.card');
    let detailsDiv = contactCard.querySelector('.details');
    console.log(detailsDiv);
    detailsDiv.style.display = detailsDiv.style.display == 'block' ? 'none' : 'block';

}

export default {
    showDetailsHandler,
}