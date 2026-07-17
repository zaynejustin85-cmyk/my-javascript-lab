const developerName = "Justin Galita ";
const specializedTrack = "Programming .NET Web development";


let modificationCount = 0;


console.log("Dashboard engine loaded successfully.")


const bioContainer = document.getElementById("bio-container")
const counterDisplay = document.getElementById("counter-display")
const updateButton = document.getElementById("update-btn")
const resetButton = document.getElementById("reset-btn") 
function refreshDashboradView()
{
    modificationCount = modificationCount + 1;
    console.log("Running layout modification index: " + modificationCount);
    
    
    const dynamicMarkup = "<h2>Name: " + developerName + "</h2>" +
                        "<p>Specialized <u>" + specializedTrack + "</u></p>" +
                        "<p>Status: Active System Developer </p>";
                        
    bioContainer.innerHTML = dynamicMarkup;
    counterDisplay.innerHTML = modificationCount;
}


function resetDashboardView() 
{
    modificationCount = 0; 
    console.log("modificationCount = 0");
    
    bioContainer.innerHTML = "";     
    counterDisplay.innerHTML = "0";  
}

updateButton.addEventListener("click", refreshDashboradView);
resetButton.addEventListener("click", resetDashboardView); 




