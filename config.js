var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 0,
    y : 0
  }
};

var TOP_WALL = {
  x : 590,
  y : 0

};
var BOTTOM_WALL = {
  x : 590,
  y : 200
};

var TOP_WALLTWO = {
  x : 295,
  y : 0

};
var BOTTOM_WALLTWO = {
  x : 295,
  y : 200
};

var PLAYER = {
  x : 100,
  y : 100
};
