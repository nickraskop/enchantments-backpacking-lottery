const api_url = 'http://jump.javin.io:5000/api/zones';
async function getZones() {
    const response = await fetch(api_url);
    const data = await response.json();
    let zoneFull = data.data;
    console.log(zoneFull);


    var mainContainer = document.getElementById('displayZones');
    for (var i=0; i < 8; i++) {
        var div = document.createElement('div');
        div.innerHTML = 'Zone ' + zoneFull[i][i+1].zone_id + ': ' + zoneFull[i][i+1].name;
        mainContainer.appendChild(div);
    }

    return zoneFull;
 
}
var anotherContainer = document.getElementById('show-award');
const awards_url = 'http://jump.javin.io:5000/api/awards'
async function displayAwards(choice) {
    const response = await fetch(awards_url);
    const data = await response.json();
    let awardData = data.data;
    console.log(awardData);
    document.getElementById('show-award').innerHTML ="";
    var awardCounter = 0;
    for (var j=0; j< 100; j++) {
        var div = document.createElement('div');
        if (awardData[j][j+1].zone_id == choice) {
            awardCounter++;
            div.innerHTML = 'Award #' + awardData[j][j+1].award_id + ': <br>' +
            '* Date awarded: ' + awardData[j][j+1].entry + '<br>' +
            '* Size: ' + awardData[j][j+1].size + '<br>' +
            '* Pref: ' + awardData[j][j+1].pref;
            anotherContainer.appendChild(div);
        }
    }
    div.innerHTML = 'There are ' + awardCounter + ' awards for this zone.';
    anotherContainer.appendChild(div);
}

getZones();


var form = document.getElementById('zone-form');

form.addEventListener('submit', function(event) {
    event.preventDefault() // Prevent form from autosubmitting

    var zoneChoice = document.getElementById('zonechoice').value;
    document.getElementById('zone-form').reset();
    displayAwards(zoneChoice);

})


