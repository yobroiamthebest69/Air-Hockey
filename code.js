var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal= createSprite(200, 28,100,20);
goal.shapeColor = 'yellow'
var goal2 = createSprite(200, 372,100, 20);
goal2.shapeColor = 'yellow'
var striker = createSprite(200, 200, 10, 10);
striker.shapeColor= 'white'
var playermallet = createSprite(200, 50, 50 ,10);
playermallet.shapeColor= 'black'
var computermallet = createSprite(200, 350, 50 ,10);
computermallet.shapeColor= 'black'
var line = createSprite(200, 15, 1000,5);
line.shapeColor= 'white'
var line2 = createSprite(200, 386, 1000,5);
line2.shapeColor= 'white'
var line3 = createSprite(10, 394,5, 1000);
line3.shapeColor= 'white'
var line4 = createSprite(390, 392,5, 1000);
line4.shapeColor= 'white'
var line5 = createSprite(200, 140, 1000,5);
line5.shapeColor= 'white'
var line6 = createSprite(200, 260, 1000,5);
line6.shapeColor= 'white'
var playerscore = 0
var computerscore = 0
var gameState = "serve";
/*function net(){
 for (var i = 0; i < 400; i=i+20) {
    line(200, i, 200, 10+i);
 }
}*/
function serve (){
striker.velocityX = 3
striker.velocityY = 4
}
function reset(){
striker.x = 200;
striker.y = 200;
striker.velocityX = 0
striker.velocityY = 0
}
function draw() {
background("green");

createEdgeSprites();
striker.bounceOff(edges);
computermallet.bounceOff(edges)
playermallet.bounceOff(edges)
striker.bounceOff(line);
striker.bounceOff(line2);
striker.bounceOff(playermallet);
striker.bounceOff(computermallet)
createEdgeSprites();
playermallet.bounceOff(line3);
playermallet.bounceOff(line4);
playermallet.bounceOff(line5);
playermallet.bounceOff(line6);
computermallet.bounceOff(line3);
computermallet.bounceOff(line4)

fill("white");
text(playerscore,23, 170 )
text(computerscore,23, 230 )
if (keyDown("left")) {
  playermallet.x = playermallet.x-10
}
if (keyDown("right")) {
  playermallet.x = playermallet.x+10
}
if (keyDown("up")) {
  if (playermallet.y>25)
  {
  playermallet.y = playermallet.y+10
  }
}
if (keyDown("down")) {
  if (playermallet.y<120)
  {
  playermallet.y = playermallet.y-10
  }
}
 if (keyDown("space")&& gameState === "serve") {
  serve()
  gameState = "play";
}
computermallet.x = striker.x;
if (striker.isTouching(goal) || striker.isTouching(goal2))
{
  if (striker.isTouching(goal))
  {
  computerscore = computerscore +1
  }
  if (striker.isTouching(goal2)) 
  {
  playerscore = playerscore +1
  }
  reset()
  gameState = "serve"
}
if (gameState === "serve") {
    text("Press Space to Serve",140,180);
  }
   
if (computerscore === 5 || playerscore === 5 ) {
  gameState = 'end';
  textSize(18);
  text('Game Over Press R to Restart',120, 180);
  }
  if (keyDown('r') && gameState === 'end') {
    computerscore = 0
    playerscore = 0
   gameState = 'serve' 
  }
  
//*net()
drawSprites()



}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
