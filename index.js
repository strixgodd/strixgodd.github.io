// Intersection Observer logic 

const homeSection=document.querySelector('.fade');
const containerServices=document.getElementsByClassName('services-container')[0];
const para=containerServices.querySelectorAll('.fade');
const sliders=document.querySelectorAll('.slide-in');
const sectionHomeOptions={
    rootMargin:"-250px 0px -250px 0px",
}
const homeSectionObserver=new IntersectionObserver(sectionOneHomeFunc,sectionHomeOptions);

function sectionOneHomeFunc(entries,homeSectionObserver){
    entries.forEach(entry=>{
        // console.log(entry.isIntersecting);
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            homeSectionObserver.unobserve(entry.target);
        }
    });
}
homeSectionObserver.observe(homeSection);
para.forEach(paras=>{
    homeSectionObserver.observe(paras);
})
sliders.forEach(slide=>{
    homeSectionObserver.observe(slide);
})
// Navbar logic 

const toggle_button=document.querySelector('.toggle-button');
const nav=document.querySelector('.side');

toggle_button.addEventListener('click',()=>{
    nav.classList.toggle('shownav');
})
// Dark Mode Logic 

let DarkMode=localStorage.getItem('Dark_Mode');
const DarkModeToggle=document.querySelector('.fa-circle-half-stroke');
localStorage.setItem('DarkMode','disabled');

function enable_dark_mode(){
    document.body.classList.add('dark-mode');
    localStorage.setItem('Dark_Mode','enabled')
}
function disable_dark_mode(){
    document.body.classList.remove('dark-mode');
    localStorage.setItem('Dark_Mode','disabled');
}

if(DarkMode=='enabled'){
    enable_dark_mode();
}

DarkModeToggle.addEventListener('click',()=>{
    DarkMode=localStorage.getItem('Dark_Mode')
    if(DarkMode=='disabled'){
        enable_dark_mode();
    }
    else{
        disable_dark_mode();
    }
})


