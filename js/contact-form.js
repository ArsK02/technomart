var linkMap = document.querySelector(".company-contacts_button");
var popupForm = document.querySelector(".write-us-modal");
var close = popupForm.querySelector(".modal-close");
var userName = popupForm.querySelector("#user-name");

linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.add("modal-show-form");
    userName.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.remove("modal-show-form");
});