let ciudad = "";

function cargarCiudad() {

    $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es",

        function(data) {

            document.querySelector(".container").style.visibility = "visible";
            document.querySelector("#ciudad").textContent = data.name;
            document.querySelector("#temperatura").innerHTML = data.main.temp + " <sup>°C</sup>";
            document.querySelector("#icono").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            document.querySelector("#descripcion").textContent = data.weather[0].description;
        }

    ).fail(function() {
        alert("La ciudad ingresada no existe. Intente nuevamente.");
        document.querySelector(".container").style.visibility = "hidden";
    });

}

document.getElementById("buscar").addEventListener("click", function() {

    ciudad = document.getElementById("ciudadInput").value;

    cargarCiudad();

});

document.getElementById("ciudadInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        ciudad = document.getElementById("ciudadInput").value;
        cargarCiudad();
    }

});
