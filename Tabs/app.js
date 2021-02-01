const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const about = document.querySelector('.about');


tabBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        for(let i = 0; i < contents.length; i++){
            if(e.currentTarget.dataset.id === contents[i].getAttribute('id')){
                contents[i].classList.add('active');
                e.currentTarget.classList.add('active');
            }else{
                contents[i].classList.remove('active');
                e.currentTarget.classList.remove('active');
            }
        }
    })
})