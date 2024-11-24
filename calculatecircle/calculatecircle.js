function show_Conten_Caircle(index,block ) {
    var diameter = document.getElementById(`block_diameter${block}`)
    var area = document.getElementById(`block_area${block}`)
    var circumference = document.getElementById(`block_circumference${block}`)

    if (index == 0) {
        diameter.style.display = "block";
        area.style.display = "none";
        circumference.style.display = "none";
    }else if (index == 1) {
        diameter.style.display = "none";
        area.style.display = "block";
        circumference.style.display = "none";
    }else if (index == 2) {
        diameter.style.display = "none";
        area.style.display = "none";
        circumference.style.display = "block";
    }
}
// _________________________________
function calculateDiameter(block) {
    var radius = parseFloat(document.getElementById(`radius1_${block}`).value);
    if (radius > 0) {
        var diameter = 2 * radius;
        document.getElementById(`diameterResult_${block}`).textContent = diameter.toFixed(2);
    } else {
        alert("กรุณากรอกค่ารัศมีที่มากกว่า 0");
    }
}

function calculateArea(block) {
    var radius = parseFloat(document.getElementById(`radius2_${block}`).value);
    if (radius > 0) {
        var area = Math.PI * Math.pow(radius, 2);
        document.getElementById(`areaResult_${block}`).textContent = area.toFixed(2);
    } else {
        alert("กรุณากรอกค่ารัศมีที่มากกว่า 0");
    }
}

function calculateCircumference(block) {
    var radius = parseFloat(document.getElementById(`radius3_${block}`).value);
    if (radius > 0) {
        var circumference = 2 * Math.PI * radius;
        document.getElementById(`circumferenceResult_${block}`).textContent = circumference.toFixed(2);
    } else {
        alert("กรุณากรอกค่ารัศมีที่มากกว่า 0");
    }
}