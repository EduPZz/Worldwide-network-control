let modal = document.getElementById('state-selector-modal');
let abrirModal = document.getElementById('BR');
let fecharModal = document.getElementById('close-modal');


abrirModal.addEventListener('click', () => {
	modal.showModal();
})

fecharModal.addEventListener('click', () => {
	modal.close()
})

