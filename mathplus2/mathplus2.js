document.getElementById('quadratic-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.getElementById('result').innerHTML = '<span class="error-message">กรุณากรอกค่าทั้งหมด</span>';
      return;
    }
  
    const discriminant = b * b - 4 * a * c;  
    let resultMessage = '';
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      resultMessage = `รากที่ 1: ${root1} และ รากที่ 2: ${root2}`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      resultMessage = `รากเดียว: ${root}`;
    } else {
      resultMessage = 'ไม่มีรากจริง (Discriminant < 0)';
    }
  
    document.getElementById('result').innerHTML = `<strong>ผลลัพธ์:</strong> ${resultMessage}`;
  });
  