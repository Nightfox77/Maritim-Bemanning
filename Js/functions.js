const burgerMenuIcon = document.querySelector("#menu");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");


burgerMenuIcon.onclick = function showModal() {
    modal.style.display = "flex";
    burgerMenuIcon.style.visibility = "hidden";
}

body.addEventListener("click", function hideModal(event) {
    if(event.target.matches("#closeModal")) {
        console.log("close")
        burgerMenuIcon.style.visibility = "visible";
        modal.style.display = "none";
    }
})