/*
Copyright (c) 2020 by Loktar (https://codepen.io/loktar00/pen/CHpGo)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function() {
  var animateSnow = window.animateSnow || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
  window.animateSnow = animateSnow;
})();

function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < flakeCount; i++) {
    var flake = flakes[i],
    x = mX,
    y = mY,
    minDist = 150,
    x2 = flake.x,
    y2 = flake.y;

    var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
    dx = x2 - x,
    dy = y2 - y;

    if (dist < minDist) {
      var force = minDist / (dist * dist),
      xcomp = (x - x2) / dist,
      ycomp = (y - y2) / dist,
      deltaV = force / 2;

      flake.velX -= deltaV * xcomp;
      flake.velY -= deltaV * ycomp;

    } else {
      flake.velX *= .98;
      if (flake.velY <= flake.speed) {
        flake.velY = flake.speed
      }
      flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
    }

    ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
    flake.y += flake.velY;
    flake.x += flake.velX;

    if (flake.y >= canvas.height || flake.y <= 0) {
      reset(flake);
    }


    if (flake.x >= canvas.width || flake.x <= 0) {
      reset(flake);
    }

    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fill();
  }

  if (animationsOn == true) {
    animateSnow(snow);
  }
};

function reset(flake) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = (Math.random() * 3) + 2;
  flake.speed = (Math.random() * 1) + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = (Math.random() * 0.5) + 0.3;
}

function initSnow() {
  for (var i = 0; i < flakeCount; i++) {
    var x = Math.floor(Math.random() * canvas.width),
    y = Math.floor(Math.random() * canvas.height),
    size = (Math.random() * 3) + 2,
    speed = (Math.random() * 1) + 0.5,
    opacity = (Math.random() * 0.5) + 0.3;

    flakes.push({
      speed: speed,
      velY: speed,
      velX: 0,
      x: x,
      y: y,
      size: size,
      stepSize: (Math.random()) / 30,
      step: 0,
      opacity: opacity
    });
  }

  snow();
};

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

var flakes = [],
canvas = document.getElementById("snow"),
ctx = canvas.getContext("2d"),
flakeCount = 1000,
mX = -100,
mY = -100

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 3;

initSnow();
