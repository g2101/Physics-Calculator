function calculate() {
    var direction = parseFloat(document.getElementById("directionInput").value);
    var distance = parseFloat(document.getElementById("distanceInput").value);
    direction *= Math.PI / 180;
    var xFinal = distance * Math.cos(direction);
    var yFinal = distance * Math.sin(direction);
    var output = document.getElementById("output");
    output.value = "The X distance (cos) is ".concat(xFinal.toFixed(3), " units. \nThe Y distance (sin) is ").concat(yFinal.toFixed(3), " units.");
}
function calculateATan() {
    var xDisplacement = parseFloat(document.getElementById("xDisplacement").value);
    var yDisplacement = parseFloat(document.getElementById("yDisplacement").value);
    var final = Math.atan(yDisplacement / xDisplacement);
    final *= 180 / Math.PI;
    var outputFinal = final;
    var direction;
    if (xDisplacement < 0 && yDisplacement > 0) {
        // upper left
        outputFinal += 180;
        direction = "northwest";
        returnAngle(outputFinal, direction);
    }
    else if (xDisplacement < 0 && yDisplacement < 0) {
        // lower left
        outputFinal += 180;
        direction = "southwest";
        returnAngle(outputFinal, direction);
    }
    else if (xDisplacement > 0 && yDisplacement < 0) {
        // lower right
        outputFinal += 360;
        direction = "southeast";
        returnAngle(outputFinal, direction);
    }
    else if (xDisplacement > 0 && yDisplacement > 0) {
        direction = "northeast";
        returnAngle(outputFinal, direction);
    }
    if (xDisplacement == 0 && yDisplacement > 0) {
        direction = "north";
        returnCardinal(outputFinal, direction);
    }
    else if (xDisplacement == 0 && yDisplacement < 0) {
        direction = "south";
        returnCardinal(outputFinal, direction);
    }
    else if (xDisplacement > 0 && yDisplacement == 0) {
        direction = "east";
        returnCardinal(outputFinal, direction);
    }
    else if (xDisplacement < 0 && yDisplacement == 0) {
        outputFinal = 180;
        direction = "west";
        returnCardinal(outputFinal, direction);
    }
    if (xDisplacement == 0 && yDisplacement == 0) {
        returnNone();
    }
}
function returnAngle(outputFinal, direction) {
    var output = document.getElementById("tanOutput");
    output.value = "The angle of theta is ".concat(outputFinal.toFixed(2), " degrees. You would need to go ").concat(Math.abs(outputFinal), " degrees ").concat(direction, ".");
}
function returnCardinal(outputFinal, direction) {
    var output = document.getElementById("tanOutput");
    output.value = "The angle is directly ".concat(direction, ". It is ").concat(Math.abs(outputFinal), " degrees.");
}
function returnNone() {
    var output = document.getElementById("tanOutput");
    output.value = "There is no angle if no distance is traveled.";
}
function pythagoreanCalc() {
    var a = parseFloat(document.getElementById("aValue").value);
    var b = parseFloat(document.getElementById("bValue").value);
    a = Math.pow(a, 2);
    b = Math.pow(b, 2);
    var c = a + b;
    c = Math.pow(c, 0.5);
    var output = document.getElementById("pythagoreanOutput");
    output.value = "The hypotenuse is C = ".concat(c.toFixed(2));
}
function calculateFriction1() {
    var kilograms = parseFloat(document.getElementById("kilograms1").value);
    var newtons = parseFloat(document.getElementById("newtons1").value);
    var staticFriction = parseFloat(document.getElementById("static1").value);
    var kineticFriction = parseFloat(document.getElementById("kinetic1").value);
    var peakStatic = (kilograms * 10) * staticFriction;
    var normalForce = kilograms * 10;
    var friction, acceleration, netForce;
    var isMoving;
    if (newtons > peakStatic) {
        isMoving = "is moving";
        friction = kineticFriction * normalForce;
        netForce = newtons - friction;
        acceleration = netForce / kilograms;
    }
    else {
        isMoving = "is not moving";
        friction = newtons;
        netForce = 0;
        acceleration = 0;
    }
    var output = document.getElementById("friction1Output");
    output.value = "The peak static value is ".concat(peakStatic.toFixed(2), " N.\nThe object ").concat(isMoving, ".\nThe friction is ").concat(friction.toFixed(2), " N.\nThe net force is ").concat(netForce.toFixed(2), " N.\nThe acceleration is ").concat(acceleration.toFixed(2), " m/s/s.");
}
