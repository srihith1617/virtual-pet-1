//Create variables here
var dog, happyDog, database, foodS, foodStock, thedog;
function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  thedog = createSprite(200,200,60,60);
  thedog.addImage(dog);
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    thedog.addImage(happyDog);
  }
  //add styles here
text(foodS,200,200)
}
function writeStock(x) {
  if(x<=0) {
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
food:x})
}
function readStock(data) {
  foodS = data.val();
}






