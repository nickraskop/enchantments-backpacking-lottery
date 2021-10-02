
// Function to display zones
const api_zone_url = 'http://jump.javin.io:5000/api/zones';
async function getZones() {
    const response = await fetch(api_zone_url);
    const data = await response.json();
    let zoneData = data.data;

    // Loop over each zone in array and append to div
    var mainContainer = document.getElementById('displayZones');
    for (var zoneArrayIndex=0; zoneArrayIndex < 8; zoneArrayIndex++) {
        var div = document.createElement('div');
        div.innerHTML = 'Zone ' + zoneData[zoneArrayIndex][zoneArrayIndex+1].zone_id + ': ' + zoneData[zoneArrayIndex][zoneArrayIndex+1].name;
        mainContainer.appendChild(div);
    }
}

getZones();


var anotherContainer = document.getElementById('show-award');
const awards_url = 'http://jump.javin.io:5000/api/awards'
// Function to display awards
async function displayAwards(choice) {
    const response = await fetch(awards_url);
    const data = await response.json();
    let awardData = data.data;
    document.getElementById('show-award').innerHTML ="";
    var awardCounter = 0;
    // Loop through every award and check if equal to zone choice
    for (var awardArrayIndex=0; awardArrayIndex< 100; awardArrayIndex++) {
        var div = document.createElement('div');
        if (awardData[awardArrayIndex][awardArrayIndex+1].zone_id == choice) {
            awardCounter++;
            div.innerHTML = 'Award #' + awardData[awardArrayIndex][awardArrayIndex+1].award_id + ': <br>' +
            '* Date awarded: ' + awardData[awardArrayIndex][awardArrayIndex+1].entry + '<br>' +
            '* Size: ' + awardData[awardArrayIndex][awardArrayIndex+1].size + '<br>' +
            '* Pref: ' + awardData[awardArrayIndex][awardArrayIndex+1].pref;
            anotherContainer.appendChild(div);
        }
    }
    // Display sum of awards in this zone
    div.innerHTML = 'There are ' + awardCounter + ' awards for this zone.';
    // append div changes to main div
    anotherContainer.appendChild(div);
}



var form = document.getElementById('zone-form');

// Form to choose zone
form.addEventListener('submit', function(event) {
    event.preventDefault() // Prevent form from autosubmitting

    var zoneChoice = document.getElementById('zonechoice').value;
    document.getElementById('zone-form').reset();
    displayAwards(zoneChoice);

})


