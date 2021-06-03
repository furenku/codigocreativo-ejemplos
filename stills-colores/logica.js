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
        r: floor(sumas.r / cuantos),
        g: floor(sumas.g / cuantos),
        b: floor(sumas.b / cuantos),
    }

    return promedio

} 




function agruparColores (colores) {
    return []
} 