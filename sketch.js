function setup() {
  createCanvas(400, 269);
}

function draw() {

  // halftone dots ellipses;
  background  (220);
  
  strokeWeight (7);
  stroke ("white");
  line (1, 75, 190, 75);

  strokeWeight (12);
  stroke ("black");
  line (1, 120, 200, 120);

  strokeWeight (5);
  stroke ("black");
  line (1, 50, 180, 50);

  strokeWeight (5);
  stroke ("black");
  line(150, 1, 300, 400);

  strokeWeight (40);
  stroke ("white");
  line(174, 1, 325, 400);

  strokeWeight (5);
  stroke ("black");
  line(194, 1, 350, 400);

  strokeWeight (25);
  stroke ("black");
  line(350, 1, 400, 400);

  strokeWeight (20);
  stroke ("black");
  line(270, -10, 400, 76);

}
