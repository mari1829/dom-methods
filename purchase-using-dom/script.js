function items(){
	let prod=document.getElementById("singleprice").innerText;
	// console.log(prod);
	let q=document.getElementById("quan").value;
	

	let total_price=prod*q;
	// console.log(total_price);
	document.getElementById("amount").innerHTML=total_price;
	// return total_price;		
}


document.getElementById("trigger").addEventListener('click',items);