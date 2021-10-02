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
        // console.log(zoneFull[i][i+1]);
    }
    
    // console.log(zoneFull);
    // const idd = zoneFull.zone_id;
    // const zone = zoneFull.name;
    // console.log(zone);
    // console.log(idd);
    return zoneFull;
    // document.getElementById('zonex').textContent = zone;
    // document.getElementById('idx').textContent = idd;
}


// var form = document.getElementById('zone-form');
// form.onsubmit = function(e) {
//     e.preventDefault();
//     var result = document.getElementById('result');
//     result.innerHTML = 'You chose ' + form.zoneChoice.value;
//     this.reset();
// }


getZones();

// var form = document.getElementById('zone-form').elements;
// form.elements['zoneChoice'];

// const form = document.querySelector('#zoneChoice');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// }
// console.log(hi);

var form = document.getElementById('zone-form');

form.addEventListener('submit', function(event) {
    event.preventDefault() // Prevent form from autosubmitting

    var zoneChoice = document.getElementById('zonechoice').value;
    document.getElementById('zone-form').reset();
    console.log(zoneChoice);

})