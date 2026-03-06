/* define functions here */

function calculateTotal(price,quantity){
	return price*quantity;
}

function outputCartRow(file, title, quantity, price,total){
	document.write('<tr>');
	document.write('<td><img src="cisc3003-practice06_files/'+file+'"></td>');
	document.write('<td>'+title+'</td>');
	document.write('<td>'+quantity+'</td>');
	document.write('<td>$'+price.toFixed(2)+'</td>');
	document.write('<td>$'+total.toFixed(2)+'</td>');
	document.write('<tr>');
	
}
        
