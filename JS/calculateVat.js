function SubmitCalculate() {
    var amount = document.getElementById("num1").value;
    const vat = Calculate(amount)
    document.getElementById("answer")
    .innerHTML = "ราคาก่อนรวมVAT " + vat
  }
  
  function Calculate(amount) {
    var result = parseFloat(amount * 100 / 107);
    if (!isNaN(result)) {
      return result.toFixed(2);
    } else {
      return 0.00;
    }
  }