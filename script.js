document.addEventListener("DOMContentLoaded", function () {
    var personagens = document.getElementById("personagens");
    var submenu = personagens.querySelector(".submenu");

    personagens.addEventListener("click", function (event) {
        event.stopPropagation(); 

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });

    document.addEventListener("click", function () {
        submenu.style.display = "none";
    });
});



