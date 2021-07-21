let section = document.querySelector('#container nav');

async function updateNav() {
    if(localStorage.getItem('accessToken')===null){
        section.querySelector('ul li:nth-child(1)').style.display = 'none';
        section.querySelector('ul li:nth-child(2)').style.display = 'none';
        section.querySelector('ul li:nth-child(3)').style.display = 'block';
        section.querySelector('ul li:nth-child(4)').style.display = 'block';
    }else{
        section.querySelector('ul li:nth-child(1)').style.display = 'block';
        section.querySelector('ul li:nth-child(1) a').textContent = localStorage.getItem('email');
        section.querySelector('ul li:nth-child(2)').style.display = 'block';
        section.querySelector('ul li:nth-child(3)').style.display = 'none';
        section.querySelector('ul li:nth-child(4)').style.display = 'none';
    }
}

let nav = {
    updateNav
}

export default nav;