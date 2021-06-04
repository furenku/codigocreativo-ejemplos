// a partir de una lista de imagenes
// agrupadas por talla de plano

let peliculas = [
    
    {
        nombre: "Nombre de película",
        imagenes: {
            "CLOSE_UP": [
                "./imagenes/nombrepeli/CLOSE_UP/imagen1.jpg",
                "./imagenes/nombrepeli/CLOSE_UP/imagen2.jpg",
            ],
            "MEDIUM_SHOT": [
                "./imagenes/nombrepeli/MEDIUM_SHOT/imagen3.jpg",
                "./imagenes/nombrepeli/MEDIUM_SHOT/imagen4.jpg",
            ],
            "LONG_SHOT": [
                "./imagenes/nombrepeli/LONG_SHOT/imagen5.jpg",
                "./imagenes/nombrepeli/LONG_SHOT/imagen6.jpg",
            ],
        }

    },

    
    {
        nombre: "Otra película",
        imagenes: {
            "CLOSE_UP": [
                "./imagenes/otrapeli/CLOSE_UP/imagen1.jpg",
                "./imagenes/otrapeli/CLOSE_UP/imagen2.jpg",
            ],
            "MEDIUM_SHOT": [
                "./imagenes/otrapeli/MEDIUM_SHOT/imagen3.jpg",
                "./imagenes/otrapeli/MEDIUM_SHOT/imagen4.jpg",
            ],
            "LONG_SHOT": [
                "./imagenes/otrapeli/LONG_SHOT/imagen5.jpg",
                "./imagenes/otrapeli/LONG_SHOT/imagen6.jpg",
            ],
        }

    },



]



// y, tras analizar y calcular su nivel de contraste



function setup() {

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background( frameCount % 255 )
    
}