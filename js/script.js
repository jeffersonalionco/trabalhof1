function expandir(container) {
    if (container.classList.contains("expandido")) {
        // Se o container estiver expandido, recolha-o
        container.classList.remove("expandido");
    } else {
        // Se o container não estiver expandido, expanda-o e recolha os outros containers
        container.classList.add("expandido");
        var outrosContainers = document.querySelectorAll(".container1, .container2");
        outrosContainers.forEach(function(element) {
            if (element !== container && element.classList.contains("expandido")) {
                element.classList.remove("expandido");
            }
        });
    }
}