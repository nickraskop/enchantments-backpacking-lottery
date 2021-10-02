const api_url = 'http://jump.javin.io:5000/api/zones';
async function getZones() {
    const response = await fetch(api_url);
    const data = await response.json();
    let zoneFull = data.data;
    console.log(zoneFull);


    var mainContainer = document.getElementById('zone-form');
    for (var i=0; i < 8; i++) {
        var div = document.createElement('div');
        div.innerHTML = 'Zone ' + zoneFull[i][i+1].zone_id + ': ' + zoneFull[i][i+1].name;
        mainContainer.appendChild(div);
    }

    return zoneFull;
 
}

const awards_url = 'http://jump.javin.io:5000/api/awards'
async function displayAwards(choice) {
    const response = await fetch(awards_url);
    const data = await response.json();
    let awardData = data.data;
    console.log(awardData);

    var anotherContainer = document.getElementById('show-award');
    for (var j=0; j< 100; j++) {
        if (awardData[j][j+1].zone_id == choice) {
            var div = document.createElement('div');
            div.innerHTML = 'Award ' + awardData[j][j+1].entry;
            anotherContainer.appendChild(div);
        }
    }
}

getZones();


var form = document.getElementById('zone-form');

form.addEventListener('submit', function(event) {
    event.preventDefault() // Prevent form from autosubmitting

    var zoneChoice = document.getElementById('zonechoice').value;
    document.getElementById('zone-form').reset();
    displayAwards(zoneChoice);

})


