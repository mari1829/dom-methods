function items() {
  let q, total_price, prod; 
 prod = document.getElementById("singleprice").innerText;
  q = document.getElementById("quan").value;
  total_price = prod * q;
  document.getElementById("amount").innerHTML = total_price;
}
document.getElementById("trigger").addEventListener("click", items);
