//selecting the container
const container = document.querySelector(".data-container");

//getting values of textbox
var Values=document.getElementById("arrv");

//selecting the 4 buttons
var button1=document.getElementById("Button1");
var button2=document.getElementById("Button2");
var button3=document.getElementById("Button3");
var button4=document.getElementById("Button4");

//Function to enabling and disabling button1
function submit(){
	if(Values.value.length>0){
		button1.disabled = false;
		button1.style.backgroundColor = "#6f459e";
	}
	else{
	button1.disabled = true;
	button1.style.backgroundColor = "lightgray";
	}
}

//function to generate array from given value
function generatearray() {
	count=0;
	//splitting the values into numbers
	const arrayValues = Values.value;
		splittedValues= arrayValues.split(' ');
		resultString = " ";
		svl=splittedValues.length;
			for (let i = 0; i < svl; i++) {
				if(splittedValues[i]<=100){
					resultString += splittedValues[i]+" ";
				}else
				{
					count++;
					alert("Any Number should not be greater than 100");
				}
			}
//printing the array
	if(count==0){
	document.getElementById("result").innerHTML ="Given Array:"+ resultString;
// function call for jquery css
	resultcss();
//function call to enable Clear and Generate bars Button
	enable();
}
}
//function for css by using jquery for printing input array
function resultcss(){
	$(document).ready(function(){
		$("#result").css({"border":"#6f459e solid 2px","border-radius":"10px","padding":"2px","background-color":"white","color":"black","font-size":"20px"});
	});
}
//function to enable Clear and Generate bars Button
function enable() {
		// To enable "Clear" button 
		button2.disabled = false;
		button2.style.backgroundColor = "#6f459e";
		// To enable "Generate Bars" Button
		button3.disabled = false;
		button3.style.backgroundColor = "#6f459e";
	  }

// Function to generate bars
function generatebars() {

// To disable "Generate Bars" Button
	button3.disabled = true;
	button3.style.backgroundColor = "lightgray";
// To disable "Submit " Button
	button1.disabled = true;
	button1.style.backgroundColor = "lightgray";
//setting container width
	container.style.width= `${svl * 35}px`;

// For loop to generate bars
	for (let i = 0; i < svl; i += 1) {
	
	// To generate values
	var value = splittedValues[i];

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;
	
	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${(i * 35)}px)`;

	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar__id");

	// Assign value to "bar-label"
	barLabel.innerHTML = value;

	// Append "bar-Label" to "bar"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}

// To enable the Sort Button
button4.disabled = false;
button4.style.backgroundColor = "#6f459e";
}

// Asynchronous function to perform "Cocktail Sort"
async function CocktailSort() {

// To disable "Sort It" Button
button4.disabled = true;
button4.style.backgroundColor = "lightgray";

//selecting bars
let bars = document.querySelectorAll(".bar");

// Initialize swapped with true
let swapped = true;

// Initialize s with zero
let s = 0;

// Initialize e with no.of bars
let e = bars.length;

while (swapped == true) {
	swapped = false;
	for (var i = s; i < e - 1; i++) {
	// Assigning value of ith bar into value1
	var value1 = parseInt(bars[i].childNodes[0].innerHTML);

	// Assigning value of i+1th bar into value2
	var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

	// To pause the execution of code for 500 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 500)
	);

	// Provide red color to the ith bar
	bars[i].style.backgroundColor = "red";

	// Provide red color to the i+1th bar
	bars[i + 1].style.backgroundColor = "red";
	if (value1 > value2) {
		var temp1 = bars[i].style.height;
		var temp2 = bars[i].childNodes[0].innerText;

		// To pause the execution of code for 500 milliseconds
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 500)
		);

		// Swap ith bar with (i+1)th bar
		bars[i].style.height = bars[i + 1].style.height;
		bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
		bars[i + 1].style.height = temp1;
		bars[i + 1].childNodes[0].innerText = temp2;

		// Set swapped
		swapped = true;
	}
		
	// To pause the execution of code for 500 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 500)
	);
		
	// Provide skyblue color to the ith bar
	bars[i].style.backgroundColor = "rgb(0, 183, 255)";

	// Provide skyblue color to the i+1th bar
	bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
	}

	if (swapped == false) {
	break;
	}

	// Set swapped false
	swapped = false;

	e = e - 1;

	for (var i = e - 1; i >= s; i--) {
	
	// Assigning value of ith bar into value1
	var value1 = parseInt(bars[i].childNodes[0].innerHTML);

	// Assigning value of i+1th bar into value2
	var value2 = parseInt(bars[i + 1].childNodes[0].innerHTML);

	// To pause the execution of code for 500 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 500)
	);

	// Provide red color to the ith bar
	bars[i].style.backgroundColor = "red";

	// Provide red color to the i+1th bar
	bars[i + 1].style.backgroundColor = "red";
	if (value1 > value2) {
		var temp1 = bars[i].style.height;
		var temp2 = bars[i].childNodes[0].innerText;

		// To pause the execution of code for 500 milliseconds
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 500)
		);

		// Swap ith bar with (i+1)th bar
		bars[i].style.height = bars[i + 1].style.height;
		bars[i].childNodes[0].innerText = bars[i + 1].childNodes[0].innerText;
		bars[i + 1].style.height = temp1;
		bars[i + 1].childNodes[0].innerText = temp2;

		// Set swapped
		swapped = true;
	}
		
	// To pause the execution of code for 500 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 500)
	);
		
	//Provide skyblue color to the ith bar
	bars[i].style.backgroundColor = "rgb(0, 183, 255)";

	// Provide skyblue color to the i+1th bar
	bars[i + 1].style.backgroundColor = "rgb(0, 183, 255)";
	}
	s = s + 1;
}

//After Sorting Completion
//Print the sorted array
var sorted=" ";
for (var x = 0; x < bars.length; x++) {
	bars[x].style.backgroundColor = "rgb(49, 226, 13)";
	sorted +=bars[x].childNodes[0].innerText+" ";
}
document.getElementById("sorted").innerHTML ="Sorted Array:"+ sorted;
//function call for applying css to print sorted array
sortedcss();
}

//function for applying css to print sorted array
function sortedcss(){
	$(document).ready(function(){
		$("#sorted").css({"border":"#6f459e solid 2px","border-radius":"10px","padding":"2px","background-color":"white","color":"black","font-size":"20px"});
	});
}

//To reset the all values and graph
function removevalues(){
	window.location.reload();
}
