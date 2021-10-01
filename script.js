const api_url = 'http://jump.javin.io:5000/api/zones';
async function getZones() {
    const response = await fetch(api_url);
    const data = await response.json();
    let zoneFull = data.data;
    console.log(zoneFull);


    var mainContainer = document.getElementById('myData');
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



getZones();