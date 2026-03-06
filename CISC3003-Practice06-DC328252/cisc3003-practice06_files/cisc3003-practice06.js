/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
   
   
   let total = 0.0;
   let shipping = 0.0;
   let subtotal=0.0;
   let itemSum = 0.0;
   for (let i = 0; i<prices.length;i++){
   	itemSum = calculateTotal(prices[i], quantities[i]);
	subtotal+=itemSum;
	outputCartRow(filenames[i],titles[i],quantities[i],prices[i],itemSum);
   }
   let tax = subtotal * 0.1;
   if(subtotal < 1000.0){
   	shipping = 40.0;
      	total = subtotal + tax + shipping;
   }else{
      	total = subtotal + tax+shipping;
   }

   document.write('<tr><td colspan="4">Subtotal</td><td>'+subtotal.toFixed(2)+'</td></tr>');
   document.write('<tr><td colspan="4">Tax</td><td>'+tax.toFixed(2)+'</td></tr>');
   document.write('<tr><td colspan="4">Shipping</td><td>'+shipping.toFixed(2)+'</td></tr>');
   document.write('<tr><td colspan="4">Grand Total</td><td>'+total.toFixed(2)+'</td></tr>');
      