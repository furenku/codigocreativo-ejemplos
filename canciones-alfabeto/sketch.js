// a partir de un
// diccionario asociando letras a canciones

let canciones = {
    "A": [
        {
            nombre: "A: Canción 1",
            archivo: "./canciones/tal-cancion/audio1.mp4",
            portada: "./canciones/tal-cancion/portada.jpg",
            letra: "./canciones/tal-cancion/cancion.txt",
            artista: "Nombre de Artista 1",
        },
        {
            nombre: "A: Canción 2",
            archivo: "./canciones/tal-cancion/audio2.mp4",
            portada: "./canciones/tal-cancion/portada.jpg",
            letra: "./canciones/tal-cancion/cancion.txt",
            artista: "Nombre de Artista 2",
        },
    ],
    "B": [
        {
            nombre: "B: Canción 1",
            archivo: "./canciones/tal-cancion/b-audio1.mp4",
            portada: "./canciones/tal-cancion/portada.jpg.mp4",
            letra: "./canciones/tal-cancion/cancion.txt",
            artista: "Nombre de Artista 3",
        },
        {
            nombre: "B: Canción 2",
            archivo: "./canciones/tal-cancion/b-audio2.mp4",
            portada: "./canciones/tal-cancion/portada.jpg.mp4",
            letra: "./canciones/tal-cancion/cancion.txt",
            artista: "Nombre de Artista 4",
        },
    ]
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