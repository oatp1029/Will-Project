/* 

	Title: Kelvin Temperature Converter for CNN - Will and Zeyus

	Program Summary: This program aims to provide the CNN Weather Center with the ability to convert temperature between various units of measurement. Our webpage enables a seamless UI/UX experience for the user of the website.
	
	Important (KEY) Program Elemnts Used: Variables, Data Types, IF statements, and Arithmetic Operators when it comes to JavaScript. Basic HTML/CSS syntax was utilized in order to create an excellent web experience.

*/ 




//Beginning Of Program






// Variable Declarations

let kelvin = 250; // static value for now. Will be updated to a dynamic value later.
let celsius = kelvin - 273; //
let fahrenheit = celsius * (9/5) + 32; // 


//Beginning Of Main


function askForName () {
  let personName = prompt('What is the temperature today?');
  
}


askForName();

//End Of Main







//User Interface




  

//End Of Program






//Notes: Please let us know if you have any ideas for improvement with regards to our website.






fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/north%20vancouver?unitGroup=metric&include=alerts%2Ccurrent%2Cdays%2Chours%2Cevents&key=QJ4MMTTUBT39MAWTZLFYVVDG6&contentType=json", {
  method: 'GET', 
  headers: {
 
  },
           
}).then(response => {
  if (!response.ok) {
    throw response; //check the http response code and if isn't ok then throw the response as an error
  }
            
  return response.json(); //parse the result as JSON

}).then(response => {
  //response now contains parsed JSON ready for use
  processWeatherData(response);

}).catch((errorResponse) => {
  if (errorResponse.text) { //additional error information
    errorResponse.text().then( errorMessage => {
      //errorMessage now returns the response body which includes the full error message
    })
  } else {
    //no additional error information 
  } 
});

function processWeatherData(response) {
  
  var location=response.resolvedAddress;
  var days=response.days;

  
  
  
  for (var i=1;i<days.length;i++) {
    console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    
    
  
  }

   maxTemp = days[1].tempmax;
    console.log(maxTemp);

  minTemp = days[1].tempmin;
    console.log(minTemp);

  averageTempToday = Math.round((maxTemp + minTemp) / 2);
    console.log(averageTempToday);
  
  }

const units = {
	Celcius: "°C",
	Fahrenheit: "°F"
};

const config = {
	minTemp: -20,
	maxTemp: 100,
	unit: "Celcius"
};


//CSS Thermometer Code


// Change min and max temperature values

const tempValueInputs = document.querySelectorAll("input[type='text']");

tempValueInputs.forEach((averageTempToday) => {
	input.addEventListener("change", (event) => {
		const newValue = averageTempToday;
		
		if(isNaN(newValue)) {
			return input.value = averageTempToday;
		} else {
			config[input.id] = averageTempToday;
			range[input.id.slice(0, 3)] = config[averageTempToday]; // Update range
			return setTemperature(); // Update temperature
		}
	});
}







function setTemperature() {
	temperature.style.height = averageTempToday;
	temperature.dataset.value = averageTempToday;
}






/* NOTES:
    Ideas for expansion located in the learning document 
    New JavaScript tools on W3 Schools 
    Variables for other conditions like the wind
    Another type of conversion could be worked on, such as Celsius to Newtons
    Utilize HTML & CSS
    UIUX: Title, Welcome, Intro, Explanation, Re-iterate input, output, Thanks
    Look at actual CNN weather page
    Watch CodeCademy video
    aski art text generstior, art for console.
    https://codepen.io/Arkellys/pen/rgpNBK - Link to cool thermometer
    when person comes into website, they can be asked in a css input box. are you in canada or usa. select below. if they are from canada, it shows clesius, if canada it shows celsisus.
*/
