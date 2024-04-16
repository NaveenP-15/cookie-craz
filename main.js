var navMenu=document.getElementById("menu")
var navMenubtn=document.getElementById("menubtn")
var navClose=document.getElementById("navclose")

if(navMenubtn){
    navMenubtn.addEventListener("click",function()
    {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener("click",function()
    {
        navMenu.classList.remove('show-menu')
    })
}
const navLink =document.querySelectorAll('.nav-link')

function removemenu(){
    var navMenu=document.getElementById("menu")
    navMenu.classList.remove('show-menu')
}
const linkAction=removemenu
navLink.forEach(function(n)
{
    n.addEventListener('click',linkAction)
} )

function blr(){
    const header = document.getElementById("header")
    if(this.scrollY >= 50){
        header.classList.add("blur-header")
    }
    else{header.classList.remove("blur-header")}
}
const blurHeader = blr
window.addEventListener('scroll',blurHeader)

function scrollup(){
    const srlbutton=document.getElementById("scroll-up")
    if(this.scrollY>=350){
        srlbutton.classList.add("show-scroll")
    }else{
        srlbutton.classList.remove("show-scroll")
    }
}
const slrup =scrollup
window.addEventListener("scroll",slrup)

const section = document.querySelectorAll('section[id]')

function scrollActive(){
    
    const scrollDown = window.scrollY

    section.forEach(function(current){
        const sectionHeight = current.offsetHeight
            sectionTop = current.offsetTop -58
            sectionId =current.getAttribute('id')
            sectionClass = document.querySelector('.nav-menu ul li a[href*="' + sectionId + '"]');
        
        // console.log(document.querySelector('.nav-menu ul li a[href*="' + sectionId + '"]'))
        // console.log(sectionHeight)
        // console.log(sectionTop)
        // console.log(sectionId)
        // console.log(sectionClass)
        // console.log("scrd:"+ scrollDown)
        if(scrollDown > sectionTop && scrollDown<= sectionTop +sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    } )

}
 window.addEventListener('scroll',scrollActive)