function e(tag, className, content) {
	const result = document.createElement(tag)
	if(className){
		result.className = className
	}
	result.textContent = content

	return result;
}

function template({ _id, title }) {

	const div1 = e('div', 'accordion');
	const div2 = e('div', 'head');
	const span = e('span','', title);
	const btn = e('button', 'button', 'More');
	btn.id = _id;

	div2.append(span);
	div2.append(btn);

	div1.appendChild(div2);


	const div3 = e('div', 'extra');
	div3.style.display='none';
	const p = e('p');

	
	div3.append(p);
	div1.appendChild(div3);

	btn.addEventListener('click',async ()=>{
		if(div3.style.display=='none'){
			const url=`http://localhost:3030/jsonstore/advanced/articles/details/`+_id;

			const data=await fetch(url);
			const response=await data.json();

			p.textContent=response.content;
			

			btn.textContent='Less';
			div3.style.display='block';

		}else{
			btn.textContent='More';
			div3.style.display='none';
		}
	})

	return div1;
}

async function solution() {
	const output = document.getElementById('main');
	const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

	const data = await fetch(url);
	const response = await data.json()

	response.forEach(x => output.appendChild(template(x)))
}

document.addEventListener('DOMContentLoaded', solution)