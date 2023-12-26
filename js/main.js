const header = document.querySelector('.header')
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', function() {
    // console.log(window.scrollY);

    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    }
    else {
        header.classList.remove('header-dark');
    }
})



const testimonial_01 = document.querySelector('.testimonial_img');
const bubble_01 = document.querySelector('.testimonial_bubble');

testimonial_01.addEventListener('click', function(){
    
    bubble_01.style.color="#f00";

})



const box_01 = document.querySelector('.about_content');
const boxHeight = box_01.offsetHeight;

document.addEventListener('scroll', function() {

    box_01.style.opacity = ((scrollY-200) / boxHeight);
    
})