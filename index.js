const newHeader = document.createElement('H1');
newHeader.setAttribute('id', 'victory');

newHeader.id = 'victory';
newHeader.textContent = 'jose is the champion';
document.body.removeChild(document.querySelector('main#main'));
document.body.appendChild(newHeader);

