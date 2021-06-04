// hay dos pistas musicales

let pistas = {
    "ESTADO_1": "./audio/pista1.mp3",
    "ESTADO_2": "./audio/pista2.mp3",
}

// tenemos 52 cartas
let cartas = [
    "./imagenes/carta1.jpg",
    "./imagenes/carta2.jpg",
    "./imagenes/carta3.jpg",
]

// tenemos elementos para armar textos,
// divididos en 3 categorias:

let textos = {
    sujeto: [
        "un ser",
        "el otro ser num. 2",
    ],
    predicado: [
        "hizo algo",
        "va a hacer algo",
    ],
    determinante: [
        "que no deberia de hacer",
        "que tiene que hacer",
        "que es divertido",
        "que no es nada divertido",
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