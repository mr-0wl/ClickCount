var num = 0;
function count() {

	if (num == 10) {
		document.getElementById("encouragement").innerHTML = "WoO! ClIcKs!";
	}
	else if (num == 25) {
		document.getElementById("encouragement").innerHTML = "No Way champ! Keep Clickin";
	}
	else if (num == 50) {
		document.getElementById("encouragement").innerHTML = "Wowie, look at you go";
	}
	else if (num == 55) {
		document.getElementById("encouragement").innerHTML = randomPlats();
	}
	else if (num == 80) {
		document.getElementById("encouragement").innerHTML = randomPlats();
	}
else if (num > 90) {
document.getElementById("encouragement").innerHTML = randomPlats();
}


// if statement needed for different levels to 'unlock' purchases
//will need a different function for the purchases
//gray out buttons until option available
num++;

document.getElementById("counters").innerHTML = num;
}

function purchaseAssistant() {
	num - 1000;
	//unlock the button
}


function randomPlats() {
	var a = "You go person!";
	var b = "Click Master";
	var c = "Clickerama!!!";
	var d = "just keep clikcing, just keep clicking";
	var e = "Clicks to the moon";
	var f = "Clicks for days man";
	var g = "Look at all those numbers!";
	var randint = Math.floor(Math.random() * 7);

	if (randint == 0) {
	return c;}
	else if (randint == 1) {
	return a; }
	else if (randint == 2) {
	return b; }
	else if (randint == 3) {
	return d;}
	else if (randint == 4) {
	return e;}
	else if (randint == 5) {
	return f;}
	else if (randint == 6) {
	return g;}
}
