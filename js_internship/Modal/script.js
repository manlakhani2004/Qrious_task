

const model = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.close-modal')
const showModelBtnAll = document.querySelectorAll('.show-modal');


function openModal() {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i=0; i<showModelBtnAll.length; i++)
{
    showModelBtnAll[i].addEventListener('click',()=>{
        openModal();
    })
    
}

closeButton.addEventListener('click',()=>{
    closeModal();
})

overlay.addEventListener('click',()=>{
    closeModal();
})

document.addEventListener('keydown',(e)=>{
    if(e.key = 'Escape' && !model.classList.contains('hidden'))
    {
        closeModal();
    }
})
