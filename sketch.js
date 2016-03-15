var london;

var hk;
var bm;
var kp;
var mm;

var blurbm
var blurkp
var blurmm

var uploadButton;
var uploadedImage;

function preload(){
  london = loadImage("images/london.png");
  hk = loadImage("images/hello_kitty.png");
  bm = loadImage("images/badtz_maru.png");
  kp = loadImage("images/kp.png");
  mm = loadImage("images/My_Melody.png")

  blurbm = loadImage("images/BLURbadtz_maru.png");
  blurkp = loadImage("images/BLURkp.png");
  blurmm = loadImage("/images/BLURMy_Melody.png");
}
function setup(){

  //upload button
  uploadButton = createFileInput(imageUploaded);

  createCanvas(london.width,london.height);
  noCursor();

  //filters
  blurbm.filter(BLUR,3);
  blurkp.filter(BLUR,3);
  blurmm.filter(BLUR,3);
}
function imageUploaded(file){
  uploadedImage = loadImage(file.data);
}
function draw(){
  if (uploadedImage){
    background(uploadedImage,0,0,london.width,london.height);
  }
  else {
    background(london,0,0,london.width,london.height);
  }
  //character icons
  image(blurbm,10,100);
  image(blurkp,80,100);
  image(blurmm,150,100);

  //text
  fill(0);
  noStroke();
  textSize(20);
  text('Help Hello Kitty find her friends!', 25, 40);
  text('Click to find Badtz-Maru, Keroppi & My Melody!', 25, 80);
  text('Upload a picture to explore your city!', 25, 200);

  //mouse + hk
  imageMode(CENTER);
  image(hk,mouseX,mouseY);

  //hk friends
     if(mouseIsPressed){

       if(mouseY > height/2){

         if(mouseX > width/2){
           image(bm,200,570);
         }
         else{
           image(mm,600,520);
         }
       }

       else {
         if(mouseX > width/2){
         } else{
           image(kp,600,40);
         }
       }
    }
}
