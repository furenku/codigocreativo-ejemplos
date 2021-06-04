// a partir de una lista de imágenes

let imagenes = [
    "./imagenes/mi-imagen1.jpeg",
    "./imagenes/mi-imagen2.jpeg",
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