

// Defining the coordinate systems
//Defining Arc1960 utm zone 36N and it's parameters 
proj4.defs("EPSG:21096", "+proj=utm +zone=36 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +nodefs");

//Defining WGS84
proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +nodefs")


function arc1960utmToWgs84() {
    var x = parseFloat(document.getElementById('eastings').value);
    var y = parseFloat(document.getElementById('northings').value);

    if (isNaN(x) || isNaN(y)) {

        document.getElementById("result").innerText = "Please enter a valid number"
        return;
    }
    

        const [lon, lat] = proj4("EPSG:21096", "EPSG:4326", [x, y]);
        document.getElementById('result').innerText = [lon, lat]
    }


