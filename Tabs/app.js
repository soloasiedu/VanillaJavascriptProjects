const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const about = document.querySelector('.about');


// tabBtns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         for(let i = 0; i < contents.length; i++){
//             if(e.currentTarget.dataset.id === contents[i].getAttribute('id')){
//                 contents[i].classList.add('active');
//                 e.currentTarget.classList.add('active');
//             }else{
//                 contents[i].classList.remove('active');
//                 e.currentTarget.classList.remove('active');
//             }
//         }
//     })
// })

about.addEventListener('click', function(e){
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        tabBtns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
            for(let i = 0; i < contents.length; i++){
                if(id === contents[i].getAttribute('id')){
                    contents[i].classList.add('active');
                }else{
                    contents[i].classList.remove('active');
                }
            }
        })
        // contents.forEach(function(content){
        //     content.classList.remove('active');
        // })
        // const elementToShow = document.getElementById(id);
        // elementToShow.classList.add('active');
    }
})