const toggle=document.querySelector(".toggle");
const menu=document.querySelector(".menu");
function togglemenu(){
if(menu.classList.contains("active")){
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML="<i class='fas fa-bars'></i>";
}else{
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML="<i class='fas fa-times'></i>";
}
}
toggle.addEventListener("click", togglemenu,false);
const items=document.querySelectorAll(".item");
function toggleItem(){

}
for(let item of item){
    if(item.querySelector(".submenu")){
        item.addEventListener("click",toggleItem,false);
        item.addEventListener("keypress",toggleItem,false);
    }
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);