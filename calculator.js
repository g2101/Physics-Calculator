function calculate() {

var direction = document.getElementById("directionInput").value;
var distance = document.getElementById("distanceInput").value;

direction *= (Math.PI / 180)

xFinal = distance * Math.cos(direction)
yFinal = distance * Math.sin(direction)

const output = document.getElementById("output");
output.value = `The X (cos) is ${xFinal.toFixed(3)} units. \nThe Y (sin) is ${yFinal.toFixed(3)} units.`
}

function calculateATan() {
    var xDisplacement = document.getElementById("xDisplacement").value;
    var yDisplacement = document.getElementById("yDisplacement").value;

    final = Math.atan(yDisplacement/xDisplacement);   
    final *= (180 / Math.PI)
    var outputFinal = final

    if (xDisplacement < 0, yDisplacement > 0) {
        outputFinal += 180
        direction = "northwest"
    }
        else if (xDisplacement < 0, yDisplacement < 0) {
            outputFinal += 180
            direction = "southwest"
        }
        else if (xDisplacement > 0, yDisplacement < 0) {
            outputFinal += 360
            direction = "southeast"
        }
    
    const output = document.getElementById("tanOutput");
    output.value = `The angle of theta is ${outputFinal.toFixed(2)} degrees. You would need to go ${Math.abs(final.toFixed(2))} degrees ${direction}.`;
}

function pythagCalc() {
    var a = document.getElementById("aValue").value;
    var b = document.getElementById("bValue").value;

    a **= 2
    b **= 2

    c = a + b
    c **= .5

    const output = document.getElementById("pythagOutput");
    output.value = `C equals ${c.toFixed(2)}`;
}