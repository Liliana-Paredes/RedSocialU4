const input = document.querySelector("#searchInput");
let filmsData = [];

window.addEventListener("DOMContentLoaded", () => {
    console.log("loaded"); 

    $(document).ready(function (){
        $.ajax({
            type: "GET",
            url: "https://ghibliapi.vercel.app/films",
            datatype: "json",
            async: true,
            success: function(data){
                filmsData = data;
                mostrarInfo(filmsData);
            }
        });
    });
});

input.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredFilms = filmsData.filter (film => 
        film.title.toLowerCase().includes(searchText)
    );
    $("#film-container").empty();
    mostrarInfo(filteredFilms);
})


function mostrarInfo(data) {
    data.forEach(film => {
        let filmCard = $("<div></div>").addClass("film-card");

        $("<img>").attr("src", film.image).addClass("film-image").appendTo(filmCard);
        $("<h3></h3>").text(film.title).appendTo(filmCard);
        $("<p></p>").text(film.original_title).appendTo(filmCard);


        // Hacer la tarjeta clicable
        filmCard.click(function() {
            // Redirigir a una nueva página con la ID de la película
            window.location.href = `detalle.html?id=${film.id}`;
        });

        $("#film-container").append(filmCard);
    });
}