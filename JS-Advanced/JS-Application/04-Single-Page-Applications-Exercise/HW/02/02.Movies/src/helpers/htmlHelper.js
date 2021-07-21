export function createHtmlElement(type, attributes, ...params) {

    let newElement = document.createElement(type);
    let text = params[0];

    if (params.length === 1 && typeof (text) !== 'object') {

        if (['input', 'textarea'].includes(type)) {
            newElement.value = text;
        } else {
            newElement.textContent = text;
        }
    } else {
        params.forEach(el => {
            newElement.appendChild(el);
        });
    }

    if(attributes !== undefined){
        Object.keys(attributes).forEach(attribute => {
            newElement.setAttribute(attribute, attributes[attribute]);
        })
    }

    return newElement
}