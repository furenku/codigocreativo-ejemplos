// tenemos una lista de videoclips
// repartidos por género musical

let videoclips = {
    "ROCK": [
        "./videoclips/unvideo1.mp4",
        "./videoclips/unvideo2.mp4",
    ],
    "CLASICA": [
        "./videoclips/clasica1.mp4",
        "./videoclips/clasica2.mp4",
    ],
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