// modal image

var modal = document.getElementById("card__modal");

var img = document.getElementById("my__img");
var modalImg = document.getElementById("img__01");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("modal__close")[0];

span.onclick = function () {
    modal.style.display = "none";
}