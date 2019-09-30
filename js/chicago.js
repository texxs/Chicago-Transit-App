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
    document.getElementById('stationSelect').addEventListener('change', function(){
    url += "access.php/?station=" +station;
    geTrains(station);
    url = "";    
  });
}

getTrains = function(station)  {
  fetch(url)
    .then((resp) =>resp.json())
    .then(function(data) {
      // console.log(data);
      getTrainInfo(data);
    }).then(function(){
      console.log(out);
      document.getElementById('trainInfo').innerhtml = "";
      out="";
    const trainArray = data.ctatt.eta;
    console.log(trainArray);
    })
}

getTrainInfo = function(data) {
    document.getElementById('trainInfo').innerHTML = "";
    out = "";
}