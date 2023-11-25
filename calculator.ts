function calculate() {
    var direction = parseFloat((<HTMLInputElement>document.getElementById("directionInput")).value);
    var distance = parseFloat((<HTMLInputElement>document.getElementById("distanceInput")).value);
  
    direction *= Math.PI / 180;
  
    var xFinal = distance * Math.cos(direction);
    var yFinal = distance * Math.sin(direction);
  
    const output = document.getElementById("output") as HTMLInputElement;
    output.value = `The X distance (cos) is ${xFinal.toFixed(3)} units. \nThe Y distance (sin) is ${yFinal.toFixed(3)} units.`;
  }
  
  function calculateATan() {
    var xDisplacement = parseFloat((<HTMLInputElement>document.getElementById("xDisplacement")).value);
    var yDisplacement = parseFloat((<HTMLInputElement>document.getElementById("yDisplacement")).value);
  
    var final = Math.atan(yDisplacement / xDisplacement);
    final *= 180 / Math.PI;
    var outputFinal = final;
    var direction;
  
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
  
  function returnAngle(outputFinal: number, direction: string) {
    const output = document.getElementById("tanOutput") as HTMLInputElement;
    output.value = `The angle of theta is ${outputFinal.toFixed(2)} degrees. You would need to go ${Math.abs(outputFinal)} degrees ${direction}.`;
  }
  
  function returnCardinal(outputFinal: number, direction: string) {
    const output = document.getElementById("tanOutput") as HTMLInputElement;
    output.value = `The angle is directly ${direction}. It is ${Math.abs(outputFinal)} degrees.`;
  }
  
  function returnNone() {
    const output = document.getElementById("tanOutput") as HTMLInputElement;
    output.value = `There is no angle if no distance is traveled.`;
  }
  
  function pythagoreanCalc() {
    var a = parseFloat((<HTMLInputElement>document.getElementById("aValue")).value);
    var b = parseFloat((<HTMLInputElement>document.getElementById("bValue")).value);
  
    a **= 2;
    b **= 2;
  
    var c = a + b;
    c **= 0.5;
  
    const output = document.getElementById("pythagoreanOutput") as HTMLInputElement;
    output.value = `The hypotenuse is C = ${c.toFixed(2)}`;
  }
  
  function calculateFriction1() {
    var kilograms = parseFloat((<HTMLInputElement>document.getElementById("kilograms1")).value);
    var newtons = parseFloat((<HTMLInputElement>document.getElementById("newtons1")).value);
    var staticFriction = parseFloat((<HTMLInputElement>document.getElementById("static1")).value);
    var kineticFriction = parseFloat((<HTMLInputElement>document.getElementById("kinetic1")).value);
  
    var peakStatic = (kilograms * 10) * staticFriction;
    var normalForce = kilograms * 10;
  
    var friction: number, acceleration: number, netForce: number;
    var isMoving: string;
  
    if (newtons > peakStatic) {
      isMoving = "is moving";
      friction = kineticFriction * normalForce;
      netForce = newtons - friction;
      acceleration = netForce / kilograms;
    } else {
      isMoving = "is not moving";
      friction = newtons;
      netForce = 0;
      acceleration = 0;
    }
  
    const output = document.getElementById("friction1Output") as HTMLInputElement;
    output.value = `The peak static value is ${peakStatic.toFixed(2)} N.\nThe object ${isMoving}.\nThe friction is ${friction.toFixed(2)} N.\nThe net force is ${netForce.toFixed(2)} N.\nThe acceleration is ${acceleration.toFixed(2)} m/s/s.`;
  }
  