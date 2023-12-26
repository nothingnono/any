


const home_01 = document.querySelector('.home_container');
const homeHeight = home_01.offsetHeight;

document.addEventListener('scroll', function(){
    console.log(window.scrollY);

    if(window.scrollY > 200) {
        home_01.classList.add('home_up');
    }
    else {
        home_01.classList.remove('home_up');
    }
})

