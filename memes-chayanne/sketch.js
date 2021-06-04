// a partir de una coleccion de imagenes
// agrupadas por mañana, tarde o noche

let imagenes = {
    mannana: [
        "./imagenes/imagen-mannana-1.jpg",
        "./imagenes/imagen-mannana-2.jpg",
    ],
    tarde: [
        "./imagenes/imagen-tarde-1.jpg",
        "./imagenes/imagen-tarde-2.jpg",
    ],
    noche: [
        "./imagenes/imagen-noche-1.jpg",
        "./imagenes/imagen-noche-2.jpg",
    ],
}


function setup() {

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background( frameCount % 255 )
    
}