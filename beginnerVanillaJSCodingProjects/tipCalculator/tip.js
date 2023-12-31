const amount = document.getElementById('amount');
const quality = document.getElementById('quality');
const guests = document.getElementById('guests');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
	const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
	amount.value = '';
	guests.value = '';	
	quality.value = '';	
	if(isNaN(tip)){
		tipAmount.innerHTML = 'Tip $0 each';
		showTipAmount();
	}
	else{
     	tipAmount.innerHTML = 'Tip $' + tip +'each';
        showTipAmount();
    }
}

showTipAmount = () => {
    var x = tipAmount;
	x.className = 'show'
	setTimeout(function(){
		 x.className = x.className.replace("show", ""); }, 5000);
}