// $(document).ready(function (){
//     $("#demo").text("Hola +Chicas Tec")
// })

// let btn1 = document.getElementById("btn-ocultar");
// let btn2 = document.getElementById("btn-mostrar");

// btn1.onclick = ocultarTexto;
// btn2.onclick = mostrarTexto;

// function ocultarTexto(){
//     document.getElementById("parrafo").style.display = "none";
// }

// function mostrarTexto(){
//     document.getElementById("parrafo").style.display = "block"
// }

$(document).ready(function(){
    $("#btn-ocultar").click(function(){
        $("#parrafo").hide();
    })
    $("#btn-mostrar").click(function(){
        $("#parrafo").show();
    })
})