//navbar logic
const togglebutton=document.querySelector('.toggle-button')
const ul=document.querySelector('.landscape')
let clist=ul.classList;
togglebutton.addEventListener('click',()=>{
    clist.toggle('shownav')
});
// testimonials logic

const data=[
{text0:
`lorem ipsum dolor sit.0
lorem ipsum dolor sit.0`,
text1:
`lorem, ipsum.0
lorem, ipsum.0`},
{text0:
`lorem ipsum dolor sit.1
lorem ipsum dolor sit.1`,
text1:
`lorem, ipsum.1
lorem, ipsum.1`},
{text0:
`lorem ipsum dolor sit.2
lorem ipsum dolor sit.2`,
text1:
`lorem, ipsum.2
lorem, ipsum.2`}
]

let para1=document.getElementById('pre1')
let para2=document.getElementById('pre2')

let currentItem=0;
window.addEventListener('DOMContentLoaded',()=>{
    showPerson(currentItem);
})

function showPerson(person){
    para1.innerText=data[person].text0;
    para2.innerText=data[person].text1;
}

const dots=document.getElementsByClassName('dots')[0];
for(let i=0;i<=2;i++){
    let dotBtn=dots.getElementsByTagName('p')[i];
    dotBtn.addEventListener('click',()=>{
        showPerson(i);
    })
}
// Dark Mode logic

let DarkMode=localStorage.getItem('DarkMode');
const DarkModeToggle=document.querySelector('.fa-adjust');
localStorage.setItem('DarMode','enabled')
const container_img=document.querySelector('.container-about').querySelector('img')

function enable_dark_mode(){
    document.body.classList.add('dark-mode')
    localStorage.setItem('DarkMode','enabled');
    container_img.src="IMAGES/about-me-dark-bg.jpg"
}

function disable_dark_mode(){
    document.body.classList.remove('dark-mode')
    localStorage.setItem('DarkMode','disabled');
    
    container_img.src="IMAGES/about.jpg"
}

if(DarkMode=='enabled'){
    enable_dark_mode()
}

DarkModeToggle.addEventListener('click',()=>{
    DarkMode=localStorage.getItem('DarkMode');
    if(DarkMode=='enabled'){
        disable_dark_mode()
    }
    else{
        enable_dark_mode()
    }
})
// INTERSECTION OBSERVER 

window.addEventListener('load',()=>{
    createObserver()
})

const header=document.querySelector('header');
const main=document.querySelector('main');
const up_btn=document.querySelector('.fa-chevron-circle-up')

function createObserver(){
    let nav_options={
        rootMargin:'-80px 0px 0px 0px'
    };
    const navObserver=new IntersectionObserver(nav_obv_func,nav_options)
    navObserver.observe(main)
}

function nav_obv_func(entries,navObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            header.classList.add('header-class')
            up_btn.classList.add('up-btn')
        }
        else{
            header.classList.remove('header-class')
            up_btn.classList.remove('up-btn')
        }
    })
}


