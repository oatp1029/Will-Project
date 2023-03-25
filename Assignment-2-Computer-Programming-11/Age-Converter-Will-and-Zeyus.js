/*

  Title: Zen Weather Station
  	
  Program Summary: This program aims to provide the local community with the ability to convert temperature between various units of measurement. Our webpage enables a seamless UI/UX experience for the user of the website.
	
  Key Program Elements Utilized: Variables, utilizing the code from an API to gleam weather data, a variety of Data Types, If ... Else If statements, Functions, Arguments and Parameters, and Arithmetic Operators when it comes to JavaScript. Basic HTML/CSS syntax was utilized in order to create an excellent web experience.


*/ 






// Functions Declarations

//omg - will



/*

 * Summary: This function proccesses the weather data obtained from the API, and prints the weather for the next few days into the console. Following this, the average temperature for today is obtained from the API.
 * Parameters: 'response,' which comes from the API.
 * Return: No specific return; rather, the program logs values to the console.
 
 */
function processWeatherData(response) { 

  //This variable uses the data from the Weather API GET request, and is utilized in the code below by stating dates and their according temperature.
  var days = response.days;  

  todayMax = days[0].tempmax; // This line makes the variable todayMax equivalent to the maximum temperature for the current day's weather (this variable is a global variable, so it has just been altered, and not defined).
  console.log(Math.round(todayMax)); // This line prints the value of the variable todayMax to the console, and also rounds it to the nearest integer.
  

  todayMin = days[0].tempmin; //This line makes the variable todayMin equivalent to the minimum
  console.log(Math.round(todayMin)); // This line prints the value of the variable todayMin to the console, and also rounds it to the nearest integer (this variable is a global variable, so it has just been altered, and not defined).


  todayAvg = Math.round((todayMax + todayMin) / 2); // This line of code makes the variable todayAvg equal the average temperature (the maximum temperature and the minimum temperature divided by two, rounded to the nearest integer). Please note that this variable is a global variable, so it has just been altered, and not defined.
  console.log(Math.round(todayAvg));  // This line prints the value of the variable todayAvg to the console, and also rounds it to the nearest integer.

  
  for (var i=0;i<days.length;i++) { // This for loop prints the weather data for the next fourteen days to the console (it prints the maximum temperature and the minimum temperature for each date). This code was obtained from the weather API.
 
    console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    
  }
  
} // End of proccessWeatherData function










/*

 * Summary:  This function enables the thermometer to have a height equivalent to the average temperature in either Fahrenheit or Celsius. Thus, this function includes the primary output (the thermometer).
 * Parameters: 'averageTempToday' and 'unit'
 * Return: No specific return, rather it alters the 'temperature' to change the height of the thermometer and the value in the black box.
 
 */
function setTemperature(averageTempToday, unit) { 


  //The Primary Ouput
  
  height = averageTempToday; //The height of the thermometer should be equal to the day's average temperature.

  height = parseFloat(height); // The value is altered from a string to a number, so that the thermometer has a number height value (in terms of measurements on screen - such as top: 50; - we utilize numbers, not strings).
  
  
  //Primary Calculations
  
  temperature.style.height = (height + 7) + "%"; // The equation for determining how much of the thermometer should fill up with blue. 

  temperature.dataset.value = (averageTempToday + unit); // This determines the value in the black box which displays the temperature in units.
  
} // End of setTemperature function








/*

 * Summary: This function hides the button based on its ID, which is myButton.
 * Parameters: None
 * Return: None; instead, elements which have the ID of myButton obtain an altered value of visibility.

 */
function hideMyButton() {
  
  document.getElementById("myButton").style.visibility = "hidden"; //This line alters the visibility of the element with the id of "myButton."

} // End of hideMyButton function






/*

 * Summary: This function shows the thermometer based on its ID, which is showMyID.
 * Parameters: None
 * Return: None; instead, elements which have the ID of myID obtain an altered value of visibility.

 */
function showMyID () {

  kelvin = (todayAvg + 273);
  celsius = (todayAvg + 0);
  fahrenheit = Math.round((todayAvg * (9/5)) + 32); 


  

  document.getElementById("celsius").innerHTML = "Celsius: " + celsius + "°C";
  document.getElementById("myID").style.visibility = "visible"; //This line alters the visibility of the element with the id of "myID."
  document.getElementById("will").style.visibility = "visible"; //This line alters the visibility of the element with the id of "myID."
  


} // End of showMyID function








/*

 * Summary: When the "Generate the Weather" button is clicked, this function runs. Its purpose is to hide the "Generate the Weather" button and show the thermometer.
 * Parameters: None
 * Return: None; instead, the function calls other functions after a delay.

 */
function timeToHide () {
  
  setTimeout(hideMyButton, 1); // Calls for the execution of the function "hideMyButton" after a delay of one millisecond.

  setTimeout(showMyID, 400); // Calls for the execution of the function "showMyID" after a delay of four hundred milliseconds.

  setTimeout(askForTempType, 1000); // Calls for the execution of the function "askForTempType" after a delay of one second.

} // End of timeToHide function








/*

 * Summary: The "askForTempType" functions asks the user whether they would like the temperature in Celsius or Fahrenheit, and deals with various contingencies based on the user's input.
 * Parameters: None
 * Return: None; instead, when the function is called, it utilizes the prompt and alert features to gather a user response.

 */
function askForTempType () {




  //Primary input is the prompt statement below. Explanation - The "askForTempType" function provides the user with an explanation of what input is expected from them.
  let region = prompt("Please enter 'C' (for Celsius) or 'F' (for Fahrenheit) as your preferred unit of temperature.");  // Asks the user to input either "Fahrenheit" or "Celsius."
  
   
   //The switch statement tells the program what to do based on the user's input.
   switch (region) {
		
		
		// If the user enters "F," the thermometer sets the temperature and the value of the black box accordingly.
		case 'F' :
			setTemperature(Math.round((todayAvg * (9/5)) + 32), "°F"); // Returns the values of the average temperature converted to Fahrenheit and the Unit (°F) as arguments to the function Set Temperature, which utilizes these values to create the height of the thermometer and the value in the black box.
	  
			alert("Great! You have selected fahrenheit as your preferred unit for temperature. Thank you for choosing Zen Weather Station for your weather needs.");
	  
			break;
	  


        
		case 'f' :
			setTemperature(Math.round((todayAvg * (9/5)) + 32), "°F"); // Returns the values of the average temperature converted to Fahrenheit and the Unit (°F) as arguments to the function Set Temperature, which utilizes these values to create the height of the thermometer and the value in the black box.
	  
			alert("Great! You have selected fahrenheit as your preferred unit for temperature. Thank you for choosing Zen Weather Station for your weather needs.");
	  
			break;



        
		// If the user enters "C," the thermometer sets the temperature and the value of the black box accordingly.
		case 'c':
			setTemperature(todayAvg, "°C"); // Returns the values of the average temperature in Celsius and the Unit (°C) as arguments to the function Set Temperature, which utilizes these values to create the height of the thermometer and the value in the black box.
	  
			alert("Great! You have selected celsius as your preferred unit for temperature.  Thank you for choosing Zen Weather Station for your weather needs.");
	  
			break;
	  

        


		case 'C':
			setTemperature(todayAvg, "°C"); // Returns the values of the average temperature in Celsius and the Unit (°C) as arguments to the function Set Temperature, which utilizes these values to create the height of the thermometer and the value in the black box.
	  
			alert("Great! You have selected celsius as your preferred unit for temperature.  Thank you for choosing Zen Weather Station for your weather needs.");
	  
			break;

		  
    
      
		case null:

			break;


        
		// If the user does not enter "celsius" or "fahrenheit" as their unit of temperature, an alert lets them know they will have to enter their preferred temperature once more.
		default:
    
			alert("Please let us know whether you would like to be informed about the temperature in 'celsius' or 'fahrenheit'.");
			 
			askForTempType();
	  
			break;
        
    } //End of the switch statement
  

  
} // End of askForTempType function





//Fetching Weather Data from API - The following lines of code have been sourced from the API tool for weather.
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/north%20vancouver?unitGroup=metric&include=alerts%2Ccurrent%2Cdays%2Chours%2Cevents&key=QJ4MMTTUBT39MAWTZLFYVVDG6&contentType=json", // Obtains data from the weather API for North Vancouver, since we have set up the API to obtain data from North Vancouver and obtained a customized link where the data is stored.
{

  method: 'GET',  // Gets the weather data from the API.

  headers: {},

})

.then(response => {

  if (!response.ok) {

    throw response;

  }            

  return response.json();  

})

.then(response => {   

  processWeatherData(response);  



}) //End of fetching the weather data from the API.










//Beginning Of Program




// Variable Declarations - The variables used throughout the program are declared below.

let kelvin, celsius, fahrenheit; // The variables for Kelvin, Celsius, and Fahrenheit units of temperature have been declared, but has not yet been assigned a value.

let todayAvg, todayMax, todayMin;  // The variablse for today's minimum, average, and maximum temperatures in North Vancouver have been declared, but have not yet been assigned a value.

let region; // The variable for the temperature input by the user has been declared, but has not yet been assigned a value.

let height; // The variable for the height of the thermometer has been declared, but has not yet been assigned a value.





//Beginning of Main




// The askForTempType() function is our main, since it is where the primary input occurs.




//End of Main







// End of Program





/* NOTES:

    *We can add on additional features in the future, such as a picture based on the weather. This would work through showing and hiding images through the getElementById method, which have utilized with the thermometer and "Get the Weather" button.






  Test Code Can Be Found Below:

    console.log(todayAvg + 'is quite cold.');
    console.log(todayAvg + 'is quite warm.');
    
*/