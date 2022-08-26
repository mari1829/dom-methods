
function calculate(){
    let uprice, qty, price,t;
    t=this.parentNode.parentNode;
    // console.log(t);
   

    uprice=t.getElementsByClassName("sprice")[0].innerText;
    qty=t.getElementsByClassName("qtyy")[0].value;
    // console.log(qty);
    price=t.getElementsByClassName("amount")[0];
    let priceA=uprice*qty;
    // console.log(priceA);
    price.innerHTML=priceA
   

}

f_call=document.getElementsByClassName("trigger");

for(i=0; i<f_call.length; i++){
    f_call[i].addEventListener("click",calculate); 
}
// console.log(f_call);




