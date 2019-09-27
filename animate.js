/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
     //Get canvas and context

     //Load assets
     var canvas = document.getElementById('mainCanvas');
     var context = canvas.getContext('2d');





       function drawPlayer() {
        //render player

        var playerImg = loadImage('assets/Swimmer.png', 40, 80);

        function loadImage(src, width, height) {
            var img = new Image(width, height);
            img.src = src;
            return img;
          }

        context.drawImage(playerImg, PLAYER.x,PLAYER.y,50,50); //crop start
    //player sprite size
        //move player
      }
      function handlePlayerMovement(){

        var fpsCounter = Date.now(), //custom timer to restrict fps
              fps = 30;
          //free falling counter
          var fallingCounter = Date.now();
          //Player
              player = {
              //private state
              _currentFrame: 0,

             //public properties
              //physics
              velocity: 2,
              force: 0.15,
              //positional
              x: 70,
              y: 20,
              width: 64,
              height: 64,

              //methods
              jump: function() {
                  this.velocity = -6;
              },
              fall: function() {
                  var now = Date.now();
                  if (now - fallingCounter > 1000 / fps) {
                      if (this.velocity < 8) this.velocity += this.force;
                      this.y += this.velocity;
                  }
              },
              hasCollided: function() {
                  var hasCollided = false;

                  var playerX  = this.x + this.width,
                      playerTopY    = this.y,
                      playerBottomY = this.y + this.height;
   /*
                  var enemyX = enemies[nextEnemyId].enemyDown.x + 40,
                      enemyLookingDownY = enemies[nextEnemyId].enemyDown.y + enemies[nextEnemyId].enemyDown.img.height,
                      enemyLookingUpY = enemies[nextEnemyId].enemyUp.y,
                      enemyWidth = enemies[nextEnemyId].enemyDown.img.width;
   */
                  //when the enemy is inside an obstacle
                  if (playerX > TOP_WALL.x && playerX < TOP_WALL.x - 100) {
                      //check for collision and tag player as collided if they hit an obstacle
                      if (playerTopY < TOP_WALL.y || playerBottomY > TOP_WALL.y)
                          hasCollided = true;
                  }

                  //if the player goes above/below screen tag as collided
                  if (playerBottomY < 0 || playerTopY > 300) {
                      hasCollided = true;
                  }

               //   if (hasCollided & PLAYER_CONTROLS_ON) loseAudio.play();

                  //return collision result
                  return hasCollided;
              },
              reset: function() {
                  this.velocity = 2;
                  this.y = 20;
              },
              /*
              getNextFrame: function() {
                  var now = Date.now();
                  if (now - fpsCounter > 1000 / fps) {
                      fpsCounter = now;
                      this._currentFrame++;
                      if (this._currentFrame > 2) this._currentFrame = 0;
                  }
                  return this._currentFrame;

              }
              */
          };

        canvas.addEventListener( "keydown", doKeyDown, true);
        function doKeyDown(e) {
          if ( e.keyCode == 87 ) {
            player.jump();
          }
        alert( e.keyCode )

        }

        player.fall();
        //collision check
        if (player.hasCollided()) {
            //deactivate player controls
            PLAYER_CONTROLS_ON = false;
            //when player falls of screen stop game
            if (player.y - player.height > 300) GAME_PLAYING = false;
        }
    }

/*
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    //SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
  }
  //if (CONTROLS.ship.backward) {
  //  var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
    //    cos = Math.cos(radians),
    //    sin = Math.sin(radians);
    //SPACE_SHIP.x -= SPACE_SHIP.speed * sin;
    //SPACE_SHIP.y -=  SPACE_SHIP.speed * cos;

  //}
  //if (CONTROLS.ship.rotateClockwise) {
    //SPACE_SHIP.rotation -= 4;
  //}
  //if (CONTROLS.ship.rotateCounterClockwise) {
    //SPACE_SHIP.rotation += 4;
//  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = 600;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = 300;
  }
}
*/
function RenderNewObject(context) {

  var bgImg = loadImage('assets/Shark.png', 40, 80);

  //Helper methods
  function loadImage(src, width, height) {
      var img = new Image(width, height);
      img.src = src;
      return img;
    }
  context.drawImage(bgImg,TOP_WALL.x,TOP_WALL.y,100,100) //crop start

  //context.fillRect(TOP_WALL.x,TOP_WALL.y,10,100);
  context.drawImage(bgImg, BOTTOM_WALL.x, BOTTOM_WALL.y, 100, 100);
  }

function HandleNewObjectMovement() {
  if(TOP_WALL.x >= 0){
    TOP_WALL.x -= 1;
  }
  if (TOP_WALL.x > GAME.canvas.width) {
    TOP_WALL.x = 0;
  } else if (TOP_WALL.x < 0) {
    TOP_WALL.x = 600;
  }
  if(BOTTOM_WALL.x >= 0){
    BOTTOM_WALL.x -= 1;
  }
  if (BOTTOM_WALL.x > GAME.canvas.width) {
    BOTTOM_WALL.x = 0;
  } else if (BOTTOM_WALL.x < 0) {
    BOTTOM_WALL.x = 600;
  }
}

function RenderNewObjectTwo(context) {
  // Draw a new item here using the canvas 'context' variable

  var bgImg = loadImage('assets/Shark.png', 40, 80);

  //Helper methods
  function loadImage(src, width, height) {
      var img = new Image(width, height);
      img.src = src;
      return img;
    }
  context.drawImage(bgImg,TOP_WALLTWO.x,TOP_WALLTWO.y,100,100) //crop start

  //context.fillRect(TOP_WALL.x,TOP_WALL.y,10,100);
  context.drawImage(bgImg, BOTTOM_WALLTWO.x, BOTTOM_WALLTWO.y, 100, 100);

  //context.fillRect(TOP_WALLTWO.x,TOP_WALLTWO.y,10,100);
  //context.fillRect (BOTTOM_WALLTWO.x, BOTTOM_WALLTWO.y, 10, 100);
  }

function HandleNewObjectMovementTwo() {
  if(TOP_WALLTWO.x >= 0){
    TOP_WALLTWO.x -= 1;
  }

  if (TOP_WALLTWO.x > GAME.canvas.width) {
    TOP_WALLTWO.x = 0;
  } else if (TOP_WALLTWO.x < 0) {
    TOP_WALLTWO.x = 600;
  }
  if(BOTTOM_WALLTWO.x >= 0){
    BOTTOM_WALLTWO.x -= 1;
  }
  if (BOTTOM_WALLTWO.x > GAME.canvas.width) {
    BOTTOM_WALLTWO.x = 0;
  } else if (BOTTOM_WALLTWO.x < 0) {
    BOTTOM_WALLTWO.x = 600;
  }
}



function runGame() {



  if (GAME.started) {

    // 1 - Reposition the objects
    //handleShipAnimation();
    HandleNewObjectMovement();
    HandleNewObjectMovementTwo();
    handlePlayerMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    //RenderSpaceship(context);
    drawPlayer(context);
    RenderNewObject(context);
    RenderNewObjectTwo(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
