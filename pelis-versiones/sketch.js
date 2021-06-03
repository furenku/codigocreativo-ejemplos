// a partir de un
// diccionario asociando letras a películas,
// donde cada película contiene 2 versiones y su nombre

let peliculas = {
    "A": {
        nombre: "Algo...",
        original: "./clips/algo-original.mp4",
        remake: "./clips/algo-remake.mp4",
    },
    "B": {
        nombre: "Bajo California",
        original: "./clips/bajo-california-original.mp4",
        remake: "./clips/bajo-california-remake.mp4",
    },
}


// permitiremos a las personas elegir una, 
// tecleando la primera letra de su nombre


// cuando se ha elegido una película

// se muestran ambas versiones lado a lado

// al terminar reproducción, se reinicia experiencia




function setup() {

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background( frameCount % 255 )
    
}