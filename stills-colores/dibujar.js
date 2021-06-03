function dibujarMenuColores() {


    let ancho = width / imagenes.length
    
    translate( ancho/2, 200 )

    for( let color of promedios ) {

        fill(
            color.r * 255,
            color.g * 255,
            color.b * 255,
        )

        circle(
            0, 0,
            ancho
        )

        translate(ancho, 0)


    }


}