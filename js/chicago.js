let url = "";
let out = "";
let station = "";

window.onload = function(){
    getStations();
}

getStations = function(){
    let out = "<select id='stationSelect'>";
    for (var x = 0; x < stations.length; X++) {
        out += "<option value='" + stations[x].number + "'>";
        out += stations[x].name;
        pot += "</option>";
    }
    out += "</select>";
    document.getElementById('stationSched').innerHTML = out;
    document.getElementById('stationSelect').addEventListener('change', function())
}