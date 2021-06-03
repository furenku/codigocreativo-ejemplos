let promedio

// a partir de una colección de imágenes

let imagenes = [
    "./imagenes/img1-4.png",
    "./imagenes/img1-3.png",
    "./imagenes/img2-4.png",
    "./imagenes/img2-3.png",
    "./imagenes/img3-4.png",
    "./imagenes/img3-3.png",
    "./imagenes/img4-4.png",
    "./imagenes/img4-3.png",
]

// vamos a detectar el promedio de color de cada una


// usando esta información, vamos a agruparlas
// de manera fácil,
// usando valores preestablecidos
// (por definir)


// una vez agrupados los colores

// vamos a presentar un menú de opciones, cada una con un color

// al clicar una, y mientras se mantenga presionado el mouse,

// se mostrará una imagen de ese grupo de color




function preload () {
    // cargar imágenes
    imagenes = imagenes.map( loadImage )



}


function setup() {

    createCanvas(
        windowWidth,
        windowHeight
    )



    // promedios = imagenes.map( obtenerPromedio )
    promedios = promediosDatos

    console.log( promedios )

}


function draw() {
    
    background( frameCount % 255 )

    dibujarMenuColores()

    // comprobarImagenes()

}