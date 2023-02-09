console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} - ${aQuien} desde el ${this.lugar}`);
}

saludar("hola", "Saul");


const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "hola", "jon");
saludar.apply(obj, ["adios", "menem"]);
saludar.apply(null, ["adios", "menem"]);

this.nombre = "Window";

const persona = {
    nombre: "jon",
    saludar: function () {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(this)
}


otraPersona.saludar();