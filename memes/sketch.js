// tenemos 5 "estadosAnimo"


let estadosAnimo = [
    "ESTADO_ANIMO_1",
    "ESTADO_ANIMO_2",
    "ESTADO_ANIMO_3",
    "ESTADO_ANIMO_4",
    "ESTADO_ANIMO_5",
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




function setup() {

    textAlign(CENTER,CENTER);

    createCanvas(
        windowWidth,
        windowHeight,
    )

}


function draw() {

    background( 255 )
    textSize(90);

    switch( estadoActual ) {
        case "ESPERANDO":

            text("esperando", width/2, height/2 )

            break;
        case "MEME":
            
            let nombreEstadoAnimo = estadosAnimo[ estadoAnimoActual ]

            text( nombreEstadoAnimo, width/2, height/2 )

            break;
    } 
    
}




// podemos cambiar de mood

function keyPressed() {
    // usar 'key', variable que nos da p5


    switch( key ) {

        case "1":
            estadoActual = "MEME"
            estadoAnimoActual = 0
            break;
        case "2":
            estadoActual = "MEME"
            estadoAnimoActual = 1
            break;
        case "3":
            estadoActual = "MEME"
            estadoAnimoActual = 2
            break;
        case "4":
            estadoActual = "MEME"
            estadoAnimoActual = 3
            break;
        case "5":
            estadoActual = "MEME"
            estadoAnimoActual = 4
            break;
        
        // puedes reiniciar usando la barra espaciadora       
        case " ":
            // estadoActual = estados[0]
            estadoActual = "ESPERANDO"

            console.log("espacio")
            break;

    }

}