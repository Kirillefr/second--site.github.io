// document.getElementById("open-modal-btn").addEventListener("click", function(){
// 	document.getElementById("my-modal").classList.add("open")
// })

// document.getElementById("close-my-modal-btn").addEventListener("click", function(){
// 	document.getElementById("my-modal").classList.remove("open")
// })

// document.getElementById("open-modal-btn2").addEventListener("click", function(){
// 	document.getElementById("my-modal2").classList.add("open2")
// })

// document.getElementById("close-my-modal-btn2").addEventListener("click", function(){
// 	document.getElementById("my-modal2").classList.remove("open2")
// })


//==== Плавное появление текста ====//
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }   else{
                    if (!animItem.classList.contains('_anim-items-no-hide')){
                        animItem.classList.remove('_active');
                    }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 200);
}

//==== регистрация/вход в аккаунт ====//
const conteiner = document.querySelector('.conteiner');
const loginLink = document.querySelector('.sign-link');
const registerLink = document.querySelector('.registr-link');

const titles = document.querySelector('.titles');


registerLink.addEventListener('click', ()=> {
    conteiner.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    conteiner.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    titles.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    titles.classList.remove('active');
});