  const buttonСart=document.querySelector('.button-cart');
	const modal = document.querySelector('.modal');
	const  modalHeaderClose = document.querySelector('.modal-header-close');
	const buttonCancel = document.querySelector('.button-cancel');
 
 buttonСart.addEventListener('click', function(event){
	modal.classList.add('is-open');
	 
 });

 modalHeaderClose.addEventListener('click', function(event){
	modal.classList.remove('is-open');
	 
 });

 buttonCancel.addEventListener('click', function(event){
	modal.classList.remove('is-open');
	 
 });

 