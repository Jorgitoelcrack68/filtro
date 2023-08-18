var filtroX=0;
var filtroY=0;
function preload() {
    filtro1=loadImage("1.png")
    filtro2=loadImage("2.png")
    filtro3=loadImage("3.png")
    filtro4=loadImage("4.webp")
    filtro5=loadImage("5.jpg")
}
var filtro;
function boton1() {
    filtro="filtro1"
}
function boton2() {
    filtro="filtro2"
}
function boton3() {
    filtro="filtro3"
}
function boton4() {
    filtro="filtro4"
}
function boton5() {
    filtro="filtro5"
}
function setup() {
    canvas=createCanvas(300,300);
    var x=(windowWidth-width)/2;
    var y=(windowHeight-height)/2;
    canvas.position(x,y);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modeloListo)
    poseNet.on('pose',gotPoses)
}
function modeloListo() {
    console.log("poseNet Listo")
}
function gotPoses(results) {
    console.log(filtro);
    console.log(results)
    if (results.length>0) {
        if(filtro=="filtro1"){
            filtroX=results[0].pose.nose.x-150
            filtroY=results[0].pose.nose.y-150
        }
        if(filtro=="filtro2"){
            filtroX=results[0].pose.nose.x-100
            filtroY=results[0].pose.nose.y-150
        }
        if(filtro=="filtro3"){
            filtroX=results[0].pose.nose.x-150
            filtroY=results[0].pose.nose.y-150
        }
        if(filtro=="filtro4"){
            filtroX=results[0].pose.nose.x-100
            filtroY=results[0].pose.nose.y-150
        }
        if(filtro=="filtro5"){
            filtroX=results[0].pose.nose.x-100
            filtroY=results[0].pose.nose.y-150
        }
    }
}
function draw() {
 image(video,0,0,300,300)
 if (filtro=="filtro1") {
    image(filtro1,filtroX,filtroY,250,250)
 }
 if (filtro=="filtro2") {
    image(filtro2,filtroX,filtroY,200,200)
 }
 if (filtro=="filtro3") {
    image(filtro3,filtroX,filtroY,300,300)
 }
 if (filtro=="filtro4") {
    image(filtro4,filtroX,filtroY,200,200)
 }
 if (filtro=="filtro5") {
    image(filtro5,filtroX,filtroY,200,200)
 }
}