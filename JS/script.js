
// Show and Hide Menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Menu Show
    // Validate if constant exixts
if (navToggle) {
    navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    } 


// Menu Hidden
// Validate if constant exixts
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        
    })
}



// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click the  on each nav-link,  we remove the show-menu class 
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ACCORDIAN SKILLS 
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className
    
    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className= 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className= 'skills_content skills_open'
    }
    }

skillsHeader.forEach((eL) => {
        eL.addEventListener('click', toggleSkills)
    })


    // Qualification Tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContents=document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        
        tab.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')   
    })
})


// Services Modal

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_buttton'),
    modalCloses = document.querySelectorAll('.services_modal-close')
        

let modal = function (modalClick) {
        modalViews[modalClick].classList.add('active-modal')
    }

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})


// close modal 
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
            
        })
    })
})


// Portfolio Swiper

let swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    
  });



  
//   TESTIMONIAL


let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween:48,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    breakpoints: {
        568: {
            slidesPreView: 2,
        }
    }
});
  

// SCROLL SECTION ACTIVE LINKS


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
            
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
        

    })
}

window.addEventListener('scroll', scrollActive)


// CHANGE BACKGROUND HEADER 
function scrollHeader() {
    const nav = document.getElementById('header');
    
    //when scroll is greater than 80 vh, add scroll-header class
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-Header')
}
window.addEventListener('scroll', scrollHeader)




// SHOW SCROLL

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when scroll is  higher  than 500 vh , add  the show-scroll class

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)


// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topics (if user sselected) 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// we obtain the current theme that the interface has by validating  the dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'uil-moon' : 'uil-sun'


// we validate if the user previously choose a topic

if (selectedTheme) {
    //if  validate is fulfilled, we ask what is the issue was to know  if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.body.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate  / deactivate the theme manually  with the button

themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.body.classList.toggle(iconTheme)
    //we save the theme and the currnet icon  the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
 





















































































































