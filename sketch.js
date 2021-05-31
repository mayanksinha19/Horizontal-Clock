var hr_bar, mn_bar, sc_bar;

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  let hr = hour();
  let mn = minute();
  let sc = second();

  fill(255,0,0);
  text("Hours : "+hr+"Minutes : "+mn+"Seconds : "+sc, 300, 500);






  let end = map(sc,0,60,0,600);
fill(255,0,0);
sc_bar = createSprite(500,100,end,50);
if(sc===0){
  sc_bar.width=0;
}
text("Seconds:"+sc, 500, 150);




let end2=map(mn,0,60,0,600);
fill(0,255,0);
mn_bar = createSprite(500,200,end2,50);
text("Minutes:"+mn, 500, 250);





let end3 = map(hr,0,24%12,0,600);
fill(0,0,255);
hr_bar = createSprite(500, 300, end3, 50);
text("Hours:"+hr, 500, 350);



  drawSprites();
}