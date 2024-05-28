let modal = document.getElementById('state-selector-modal');
let br = document.getElementById('BR');
let us = document.getElementById('US');
let uk = document.getElementById('GB');
let jp = document.getElementById('JP');
let fecharModal = document.getElementById('close-modal');
let stateList = document.getElementById('state-list');


const states = {
	'BR': ['São Paulo', 'Rio de Janeiro'],
	'US': ['Nova York'],
	'GB': ['England'],
	'JP': ['Tokyo']
};


const fillModal = (countryCode) => {
	stateList.innerHTML = '';

	let stateArray = states[countryCode];

	stateArray.forEach(state => {
		let li = document.createElement('li');
		let link = document.createElement('a');
		li.textContent = state;
		stateList.appendChild(li);
		link.setAttribute('href', 'pages/network/GB/index.html')
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
  
  jp.addEventListener('click', () => {
	fillModal('JP');
	modal.showModal();
  });
  
  fecharModal.addEventListener('click', () => {
	modal.close();
  });

fecharModal.addEventListener('click', () => {
	modal.close()
})

