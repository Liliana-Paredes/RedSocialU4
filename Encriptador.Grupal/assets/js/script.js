const letras = "ABCDEFGHIJKLMNOPQRS";
const cambiarNumeros = [
    replace(/A/g, "65")
        .replace(/B/g, "66")
        .replace(/C/g, "67")
        .replace(/D/g, "68")
        .replace(/E/g, "69")
        .replace(/F/g, "70")
        .replace(/G/g, "71")
        .replace(/H/g, "72")
        .replace(/I/g, "73")
        .replace(/J/g, "74")
        .replace(/K/g, "75")
        .replace(/L/g, "76")
        .replace(/M/g, "77")
        .replace(/N/g, "78")
        .replace(/O/g, "79")
        .replace(/P/g, "80")
        .replace(/Q/g, "81")
        .replace(/R/g, "82")
        .replace(/S/g, "83")
        .replace(/T/g, "84")
        .replace(/U/g, "85")
        .replace(/V/g, "86")   
        .replace(/W/g, "87")
        .replace(/X/g, "88")
        .replace(/Y/g, "89")
        .replace(/Z/g, "90")
        .replace(/Ñ/g, "165")
];

function encriptador (texto) {
    let textoCifrado = "";
    const nuevoIndex = (index + shift) % letras.length;
    const letraCifrada = letras[nuevoIndex];
    const cambiarNumeros = letras.indexOf(letraCifrada) % cambiarNumero.length;
    if (textoCifrado.length !== 0) {
        document.getElementById("resultado-texto").value = textoOriginal;
    } else {
        alert("Debes ingresar algún texto para desencriptar");
    }
}

document.getElementById("btn-encriptar").addEventListener("click", function() {
    encriptar();
  })
  document.getElementById("btn-desencriptar").addEventListener("click", function() {
    desencriptar();
  })
  document.getElementById("btn-eliminar").addEventListener("click", function() {
    document.getElementById("ingresar-texto").value = "";
    document.getElementById("resultado-texto").value = "";
  });