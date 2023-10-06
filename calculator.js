function calculate() {
  var direction = document.getElementById("directionInput").value;
  var distance = document.getElementById("distanceInput").value;

  direction *= Math.PI / 180;

  xFinal = distance * Math.cos(direction);
  yFinal = distance * Math.sin(direction);

  const output = document.getElementById("output");
  output.value = `The X distance (cos) is ${xFinal.toFixed(
    3
  )} units. \nThe Y distance (sin) is ${yFinal.toFixed(3)} units.`;
}

function calculateATan() {
  var xDisplacement = document.getElementById("xDisplacement").value;
  var yDisplacement = document.getElementById("yDisplacement").value;

  final = Math.atan(yDisplacement / xDisplacement);
  final *= 180 / Math.PI;
  var outputFinal = final;

  if (xDisplacement < 0 && yDisplacement > 0) {
    // upper left
    outputFinal += 180;
    direction = "northwest";
  } else if (xDisplacement < 0 && yDisplacement < 0) {
    // lower left
    outputFinal += 180;
    direction = "southwest";
  } else if (xDisplacement > 0 && yDisplacement < 0) {
    // lower right
    outputFinal += 360;
    direction = "southeast";
  } else {
    direction = "northeast";
  }

  if (xDisplacement == 0 && yDisplacement > 0) {
    direction = "north"
  } 
  if (xDisplacement == 0 && yDisplacement < 0) {
    direction = "south"
  }
  if (xDisplacement > 0 && yDisplacement == 0) { 
    direction = "east"
  }
  if (xDisplacement < 0 && yDisplacement == 0) {
    direction = "west"
  }

  const output = document.getElementById("tanOutput");
  output.value = `The angle of theta is ${outputFinal.toFixed(
    2
  )} degrees. You would need to go ${Math.abs(
    final.toFixed(2)
  )} degrees ${direction}.`;
}

function pythagoreanCalc() {
  var a = document.getElementById("aValue").value;
  var b = document.getElementById("bValue").value;

  a **= 2;
  b **= 2;

  c = a + b;
  c **= 0.5;

  const output = document.getElementById("pythagoreanOutput");
  output.value = `The hypotenuse is C = ${c.toFixed(2)}`;
}
