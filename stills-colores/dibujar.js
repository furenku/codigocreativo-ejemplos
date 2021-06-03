function dibujarMenuColores() {


    let ancho = width / imagenes.length
    
    translate( ancho/2, 200 )

    for( let color of promedios ) {

        fill(
            color.r,
            color.g,
            color.b,
        )

        circle(
            0, 0,
            ancho
        )

        translate(ancho, 0)


    }


}