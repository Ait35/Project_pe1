
function calculateAverage(blockAG) {
    // รับค่าจากช่องกรอกข้อมูล
    const input = document.getElementById(`numbers${blockAG}`).value;

    if (!input) {
        document.getElementById(`result${blockAG}`).innerText = "กรุณากรอกตัวเลข";
        return;
    }

    // แปลงข้อความเป็นอาร์เรย์ของตัวเลข
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // ตรวจสอบว่ามีค่าที่ไม่ใช่ตัวเลขหรือไม่
    if (numbers.some(isNaN)) {
        document.getElementById(`result${blockAG}`).innerText = "กรุณากรอกเฉพาะตัวเลข";
        return;
    }

    // คำนวณค่าเฉลี่ย
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;

    // แสดงผลลัพธ์
    document.getElementById(`result${blockAG}`).innerText = `ค่าเฉลี่ยคือ: ${average.toFixed(2)}`;
}
