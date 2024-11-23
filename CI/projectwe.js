function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const timesCompounded = parseInt(document.getElementById('timesCompounded').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
        document.getElementById('Ci_result').innerText = "กรุณากรอกข้อมูลให้ครบถ้วน!";
        return;
    }

    const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    const interestEarned = amount - principal;

    document.getElementById('Ci_result').innerHTML = `
        จำนวนเงินรวมทั้งหมด: ${amount.toFixed(2)} บาท<br>
        ดอกเบี้ยที่ได้รับ: ${interestEarned.toFixed(2)} บาท
    `;
}
