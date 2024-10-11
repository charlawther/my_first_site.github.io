document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("lanaModal");
    var span = document.getElementsByClassName("close")[0];

    var modalTrigger = document.getElementById("modal-trigger");

    modalTrigger.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрываем модальное окно при клике вне его области
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
