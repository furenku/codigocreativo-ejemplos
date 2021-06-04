// tenemos una serie de pinturas,
// con la info de su año, y de su autor

let pinturas = [

    {
        nombre: "Nombre de la obra",
        archivo: "./imagenes/pintura1.jpeg",
        artista: "Nombre del artista",
        anno: 1878,
        corriente: "Impresonismo",
    },

    {
        nombre: "Nombre de otra obra",
        archivo: "./imagenes/pintura2.jpeg",
        artista: "Nombre de otro artista",
        anno: 1879,
        corriente: "Post-Impresonismo",
    },

]


function setup() {

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background( frameCount % 255 )
    
}