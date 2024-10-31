function Persona(nombre,apellido,edad,genero,intereses) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.intereses = intereses;
    this.bio = function(){
        return "Mi nombre es "+ this.nombre + ""
    }
}