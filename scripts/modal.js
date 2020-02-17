'use strict';

const modal = document.getElementById("card-modal");
const btn = document.querySelector(".modal-btn");

//When the user clicks on the button, open the modal. Pretty much taking a css element and converting it into a javascript object.
btn.onclick = function(e) {
    // console.log(e.target);
    modal.style.display = "block"; /* block is the default display style */
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
