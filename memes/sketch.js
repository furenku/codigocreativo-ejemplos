let txts = []
let imgs = []
let cualTexto = 0
let cualImagen = 0

// tenemos 5 "estadosAnimo"


let estadosAnimo = [{
        nombre: "ESTADO_ANIMO_1",
        textos: textos1,
        imagenes: [
            "./imagenes/girl.jpeg",
            "./imagenes/img1.png",
            "./imagenes/img2.png",
            "./imagenes/img1-3.png",
            "./imagenes/img1-4.png",
        ]
    },
    {
        nombre: "ESTADO_ANIMO_2",
        textos: textos2,
        imagenes: [
            "./imagenes/cheems.jpg",
            "./imagenes/img2.png",
            "./imagenes/img1.png",
            "./imagenes/img2-3.png",
            "./imagenes/img2-4.png",
        ]
    },
    {
        nombre: "ESTADO_ANIMO_3",
        textos: textos3,
        imagenes: [
            "./imagenes/img3.png",
            "./imagenes/img1.png",
            "./imagenes/img3-3.png",
            "./imagenes/img3-4.png",
        ]
    },
    {
        nombre: "ESTADO_ANIMO_4",
        textos: textos4,
        imagenes: [
            "./imagenes/img4.png",
            "./imagenes/img1.png",
            "./imagenes/img4-3.png",
            "./imagenes/img4-4.png",
        ]
    },
    {
        nombre: "ESTADO_ANIMO_5",
        textos: textos5,
        imagenes: [
            "./imagenes/img1.png",
            "./imagenes/img2.png",
            "./imagenes/img3-3.png",
            "./imagenes/img4-4.png",
        ]
    },
]

let estadoAnimoActual = 0

// tenemos 2 estados: 

// 1. esperando elección mood
// 2. mostrando meme

let estadosApp = [
    "ESPERANDO",
    "MEME",
]


let estadoActual = "ESPERANDO"



// si tú eliges un mood

// se muestra un resultado



function preload() {

    estadosAnimo.forEach(eAnimo => {
        eAnimo.imagenes = eAnimo.imagenes.map(loadImage)
    })

}



function setup() {

    textAlign(CENTER, CENTER);

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background(255)
    textSize(35);

    switch (estadoActual) {
        case "ESPERANDO":
            fill(0)
 
            text("esperando", width / 2, height / 2)

            break;

        case "MEME":
            
            let texto = txts[ cualTexto ]
            
            let imagen = imgs[ cualImagen ]

            let palabras = texto.split(" ")

            let mitad = round(palabras.length / 2)

            let textoArriba = palabras.slice(0, mitad).join(" ")
            let textoAbajo = palabras.slice(mitad, palabras.length).join(" ")

            // let nombreEstadoAnimo = estadosAnimo[ estadoAnimoActual ]

            image(imagen, 0, 0, width, height)

            fill(0)
            text(textoArriba.toUpperCase(), width / 2, 50)
            text(textoAbajo.toUpperCase(), width / 2, height - 50)

            fill(255)
            text(textoArriba.toUpperCase(), width / 2 + 2, 50 - 2)
            text(textoAbajo.toUpperCase(), width / 2 + 2, height - 50 - 2)

            break;
    }

}


function generarMeme() {
    
    estadoActual = "MEME"

    txts = estadosAnimo[estadoAnimoActual].textos
    cualTexto = floor(random( txts.length ))

    imgs = estadosAnimo[estadoAnimoActual].imagenes
    cualImagen = floor(random( imgs.length ))

}


// podemos cambiar de mood

function keyPressed() {
    // usar 'key', variable que nos da p5


    switch (key) {

        case "1":
            estadoAnimoActual = 0
            generarMeme()
            break;
        case "2":
            estadoAnimoActual = 1
            generarMeme()
            break;
        case "3":
            estadoAnimoActual = 2
            generarMeme()
            break;
        case "4":
            estadoAnimoActual = 3
            generarMeme()
            break;
        case "5":
            estadoAnimoActual = 4
            generarMeme()
            break;
        case "6":
            estadoAnimoActual = floor(random(5))
            generarMeme()
            break;

            // puedes reiniciar usando la barra espaciadora       
        case " ":
            // estadoActual = estados[0]
            estadoActual = "ESPERANDO"

            console.log("espacio")
            break;

    }

}