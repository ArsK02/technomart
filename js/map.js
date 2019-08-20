var link = document.querySelector(".open-map");
var popup = document.querySelector(".map-modal");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show-map");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show-map");
});