
function calculateAverage(blockAG) {
    
    const input = document.getElementById(`numbers${blockAG}`).value;

    if (!input) {
        document.getElementById(`result${blockAG}`).innerText = "กรุณากรอกตัวเลข";
        return;
    }

    
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    
    if (numbers.some(isNaN)) {
        document.getElementById(`result${blockAG}`).innerText = "กรุณากรอกเฉพาะตัวเลข";
        return;
    }

   
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;

    
    document.getElementById(`result${blockAG}`).innerText = `ค่าเฉลี่ยคือ: ${average.toFixed(2)}`;
}