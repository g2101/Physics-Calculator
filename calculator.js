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
    returnAngle(outputFinal, direction);
  } else if (xDisplacement < 0 && yDisplacement < 0) {
    // lower left
    outputFinal += 180;
    direction = "southwest";
    returnAngle(outputFinal, direction);
  } else if (xDisplacement > 0 && yDisplacement < 0) {
    // lower right
    outputFinal += 360;
    direction = "southeast";
    returnAngle(outputFinal, direction);
  } else if (xDisplacement > 0 && yDisplacement > 0) {
    direction = "northeast";
    returnAngle(outputFinal, direction);
  }

  if (xDisplacement == 0 && yDisplacement > 0) {
    direction = "north";
    returnCardinal(outputFinal, direction);
  } else if (xDisplacement == 0 && yDisplacement < 0) {
    direction = "south";
    returnCardinal(outputFinal, direction);
  } else if (xDisplacement > 0 && yDisplacement == 0) {
    direction = "east";
    returnCardinal(outputFinal, direction);
  } else if (xDisplacement < 0 && yDisplacement == 0) {
    outputFinal = 180;
    direction = "west";
    returnCardinal(outputFinal, direction);
  }

  if (xDisplacement == 0 && yDisplacement == 0) {
    returnNone();
  }
}

function returnAngle(outputFinal, direction) {
  const output = document.getElementById("tanOutput");
  output.value = `The angle of theta is ${outputFinal.toFixed(
    2
  )} degrees. You would need to go ${Math.abs(
    outputFinal.toFixed(2)
  )} degrees ${direction}.`;
}

function returnCardinal(outputFinal, direction) {
  const output = document.getElementById("tanOutput");
  output.value = `The angle is directly ${direction}. It is ${Math.abs(
    outputFinal.toFixed(2)
  )} degrees.`;
}

function returnNone() {
  const output = document.getElementById("tanOutput");
  output.value = `There is no angle if no distance is traveled.`;
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
