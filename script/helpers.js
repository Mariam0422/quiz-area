export const valueSetter = (selector, value) => {
 document.querySelector(selector).innerHTML = value;
}

export const tegCreator = (tegName, parent, value, index) => {
const tag =  document.createElement(tegName);
tag.dataset.option = index;
parent.appendChild(tag);
tag.innerHTML = value;

}