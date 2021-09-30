const toggle = document.getElementById('menu-open'),
    navMenu = document.getElementById('nav_menu'),
    navClose = document.getElementById('menu_close')


if (toggle) {
    toggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        toggle.style.display = 'none'
        navClose.style.display = 'inline'
        // navClose.classList.add('show-menu');
    })

}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navClose.style.display = 'none'
        toggle.style.display = 'inline'
        // toggle.classList.add('show-menu');
    })
}

/*const SubMenuVisible = document.getElementById('sub_menu_visible'),
      subMenuItem = document.getElementById('sub_menu_item'),
      dropIconRotate = document.getElementById('sub_menu_dropIcon')

if (SubMenuVisible) {
    SubMenuVisible.addEventListener('click', () => {
        console.log('I am clicked')
        subMenuItem.classList.toggle('sub-menu-visible')
        SubMenuVisible.style.color = 'hsl(var(--hue-primary-color), 100%, 33%)'
        // dropIconRotate.style.transform = 'rotate(360deg)'
        dropIconRotate.classList.toggle('submenu-drop-icon')
    })
}*/

/* Worked well
const linkCollapse = document.getElementsByClassName('collapse__link')
var i
    for(i=0; i<linkCollapse.length; i++){
    const showSubMenu = (menuItem, submenuDropicon) => {
        const subMenuItem = document.getElementById(menuItem),
            dropIconRotate = document.getElementById(submenuDropicon)
            
            
        if (linkCollapse) {
        linkCollapse[i].addEventListener('click', () => {
            console.log('I am clicked')
            subMenuItem.classList.toggle('sub-menu-visible')
            SubMenuVisible = document.getElementById('sub_menu_visible')
            SubMenuVisible.style.color = 'hsl(var(--hue-primary-color), 100%, 33%)'
            // dropIconRotate.style.transform = 'rotate(360deg)'
            dropIconRotate.classList.toggle('submenu-drop-icon')
        })
}
}
showSubMenu('sub_menu_item', 'sub_menu_dropIcon');
}*/



/*const linkCollapse = document.getElementsByClassName('collapse__link')
var i
    for(i=0; i<linkCollapse.length; i++){
        linkCollapse[i].addEventListener('click', function(){
            // const collapseMenu = this.nextElementSibling
            const collapseMenu = document.getElementById('sub__menu')
            collapseMenu.classList.toggle('sub-menu-visible')

            dropIconRotate = document.getElementById(submenuDropicon)
            dropIconRotate.classList.toggle('submenu-drop-icon')
            
            const rotate = collapseMenu.previousElementSibling
            rotate.classList.toggle('submenu-drop-icon')
        })
    }
*/

/*==================== SUBMENU JS RULES ====================*/
const skillsContent = document.getElementsByClassName('subMenu__content'),
    skillsHeader = document.querySelectorAll('.subMenu__header'),
    dropIconRotate = document.getElementById('subMenu_dropIcon')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'subMenu__content subMenu__close'
    }
    if (itemClass === 'subMenu__content subMenu__close') {
        this.parentNode.className = 'subMenu__content subMenu__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// ==========================Swiper Js======================
/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  */

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ===================Features list display Js Rule=======================
/* let openFeaturesList = document.getElementById('svg-icon-features'),
    featureList = document.getElementById('features_list')

if (openFeaturesList) {
    openFeaturesList.addEventListener('click', () => {
        featureList.classList.toggle('open-features-list')
        openFeaturesList.classList.toggle('transform-features-icon')
    })
} */

// if (openFeaturesList.className === 'open-features-list'){
//     openFeaturesList.className.toggle('transform-features-icon')
// } 

const skillsContent1 = document.getElementsByClassName('feature__content'),
      skillsHeader1 = document.querySelectorAll('.features__header')
    //   iconRotate = document.getElementById('svg-icon-features')

function toggleFeatures(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent1.length; i++){
        skillsContent1[i].className = 'feature__content features__close'
    }
    if(itemClass === 'feature__content features__close'){
        this.parentNode.className = 'feature__content features__open'
    }
}

skillsHeader1.forEach((el) => {
    el.addEventListener('click', toggleFeatures)
})



/*==================== JS RULES for Mouse Over Effect for SUBMENU in desktop view ====================*/
/* const skillsContent = document.getElementsByClassName('subMenu__content'),
    skillsHeader = document.querySelectorAll('.subMenu__header'),
    dropIconRotate = document.getElementById('subMenu_dropIcon')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'subMenu__content subMenu__close'
    }
    if (itemClass === 'subMenu__content subMenu__close') {
        this.parentNode.className = 'subMenu__content subMenu__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('mouseOver', toggleSkills)
}) */