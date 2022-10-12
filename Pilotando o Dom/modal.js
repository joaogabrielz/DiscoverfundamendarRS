const openModalBtn = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper')

openModalBtn.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    //console.log(event);
    const isEscKey = event.key === 'Escape';
   
    const invisible = modalWrapper.classList.contains('invisible');
    if(!invisible && isEscKey)
        modalWrapper.classList.add('invisible');   
})