function comprobarImagenes() {


    translate( 0, 200 )

    for( let imagen of imagenes ) {

        let ancho = width / imagenes.length
        
        image(
            imagen,
            0, 0,
            ancho, 160
        )

        translate(ancho, 0)


    }


}