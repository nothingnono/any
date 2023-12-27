const home = document.querySelector(".home_container");

const homeHeight = home.offsetHeight;

const top_button = document.querySelector(".arrow_up");

 

document.addEventListener("scroll", () => {

    if(window.scrollY > homeHeight / 2) {

        top_button.style.opacity = 1;

    } else {

        top_button.style.opacity = 0;

    }

})

/*
const box_some = document.querySelector('#skills');
const someHeight = box_some.offsetHeight;
const skill_content = document.querySelector(".skills_content");

document.addEventListener('scroll', function() {

    if(window.scrollY > someHeight / 2) {
        skill_content.style.marginTop = "0px";
        skill_content.style.opacity = 1;
    }
    else {
        skill_content.style.marginTop = "-300px";
        skill_content.style.opacity = 0.1;
    }
})
*/