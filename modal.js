let modal = document.getElementById('state-selector-modal');
let br = document.getElementById('BR');
let us = document.getElementById('US');
let uk = document.getElementById('GB');
let jp = document.getElementById('JP');
let fecharModal = document.getElementById('close-modal');
let stateList = document.getElementById('state-list');


const states = {
	'BR': [{name: 'São Paulo', url: 'pages/network/BR/SP/index.html'}, {name: 'Rio de Janeiro', url: 'pages/network/BR/RJ/index.html'}],
	'US': [{name: 'Nova York', url: 'pages/network/US/index.html'}],
	'GB': [{name: 'Inglaterra', url: 'pages/network/GB/index.html'}]
};

const fillModal = (countryCode) => {
	stateList.innerHTML = '';

	let stateArray = states[countryCode];

	stateArray.forEach(state => {
    let link = document.createElement('a');
		let li = document.createElement('li');
		link.appendChild(li);
    li.textContent = state.name;
    link.setAttribute('href', state.url);
    stateList.appendChild(link);
	});
}

br.addEventListener('click', () => {
	fillModal('BR');
	modal.showModal();
  });
  
  us.addEventListener('click', () => {
	fillModal('US');
	modal.showModal();
  });
  
  uk.addEventListener('click', () => {
	fillModal('GB');
	modal.showModal();
  });
  
  fecharModal.addEventListener('click', () => {
	modal.close();
  });

fecharModal.addEventListener('click', () => {
	modal.close()
})

