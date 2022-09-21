
getPrice = function(){
  let num1 = Number(document.getElementById("price").value);
  let num2 = Number(document.getElementById("discount").value) /100;
  let totalValue = num1 - (num1*num2);
  let voitSummast = num1-totalValue;
  document.getElementById("winn").value = voitSummast.toFixed(2);
  document.getElementById("total").value = totalValue.toFixed(2);
}