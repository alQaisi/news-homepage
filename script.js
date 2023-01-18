const menuIcon=document.querySelector(".menu-icon");
const closeIcon=document.querySelector(".closeIcon");
const overlay=document.querySelector(".overlay");
const menu=document.querySelector(".menu");
const menuItems=document.querySelectorAll(".menu a");

menuIcon.addEventListener("click",toggleMenu);
closeIcon.addEventListener("click",toggleMenu);
menuItems.forEach(item=>item.addEventListener("click",toggleMenu));

function toggleMenu(){
    if(menu.classList.contains("hidden")){
        overlay.classList.toggle("hidden");
        return menu.classList.toggle("hidden");
    }
    overlay.classList.toggle("hide");
    menu.classList.toggle("hide");
}
