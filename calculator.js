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

    if (-90<final<0) {
        outputFinal += 360
    }
    if (-90<final<-180) {
        outputFinal += 180
    }
    
    const output = document.getElementById("tanOutput");
    output.value = `The angle of theta is ${outputFinal.toFixed(2)} degrees.`;
}