const burgerMenuIcon = document.querySelector("#menu");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const logo = document.querySelector(".logo")
const hero = document.querySelector("#hero");

/* show Modal */
burgerMenuIcon.onclick = function showModal() {
    modal.style.transform = "translateX(0%)";
    burgerMenuIcon.style.visibility = "hidden";
    logo.style.visibility = "hidden";
    hero.classList.remove("show");
    body.style.overflow = "hidden";
}
/* hide Modal */
body.addEventListener("click", function hideModal(event) {
    if(event.target.matches("#closeModal") || (event.target.matches(".mobileMenuLink"))) {
        
        burgerMenuIcon.style.visibility = "visible";
        modal.style.transform = "translateX(-100%)";
        body.style.overflow = "auto";
        setTimeout(function() {
            logo.style.visibility = "visible";
            hero.classList.add("show");
        }, 500);
       
    }
})
/* slide in effect */
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));  
    })