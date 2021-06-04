// a partir de un
// diccionario asociando letras a canciones

let canciones = {
    "A": [
        {
            nombre: "A: Canción 1",
            archivo: "./canciones/lost-in-the-wind/cancion.mkv",
            portada: "./canciones/lost-in-the-wind/portada.png",
            letra: "./canciones/lost-in-the-wind/letra.txt",
            artista: "Nombre de Artista 1",
        },
        {
            nombre: "A: Canción 1",
            archivo: "./canciones/angel-of-death/cancion.mkv",
            portada: "./canciones/angel-of-death/portada.png",
            letra: "./canciones/angel-of-death/letra.txt",
            artista: "Nombre de Artista 1",
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