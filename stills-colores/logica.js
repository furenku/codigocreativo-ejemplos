let gruposCantidad = 4

function obtenerPromedio( imagen ) {

    
    let sumas = {
        r: 0,
        g: 0,
        b: 0,
    }

    let cuantos = floor( imagen.width * imagen.height )

    for( let i=0; i<imagen.width; i++) {
        for( let j=0; j<imagen.height; j++) {

            let coloresPixel = imagen.get(i,j)

            sumas.r += coloresPixel[0]
            sumas.g += coloresPixel[1]
            sumas.b += coloresPixel[2]
        }
    }

    let promedio = {
        r: (sumas.r / cuantos) / 255,
        g: (sumas.g / cuantos) / 255,
        b: (sumas.b / cuantos) / 255,
    }

    return promedio

} 




function agruparColores (colores) {

    // con base en una cantidad
    // de grupos previamente acordada

    // gruposCantidad = 4

    // let rangoTotal = 255
    let rangoTotal = 1
    let medida = rangoTotal / gruposCantidad




    return []
} 