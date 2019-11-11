var btn = document.querySelector('.burger');
btn.onclick = function (e) {
    var element = document.querySelector(".show-burger");
    if (element.classList.contains("show-block")) {
        element.classList.remove("show-block");
    } else {
        element.classList.add("show-block");
    }
}

