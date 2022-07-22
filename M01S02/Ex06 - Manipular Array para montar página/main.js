var map

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0.025335, lng: -51.073248 },
    zoom: 15
  })
}

var amapaLanchesAPI = 'https://amapalanches.com/includes/v1/getTodas.php'

fetch(amapaLanchesAPI)
  .then(function (result) {
    return result.json()
  })
  .then(function (data) {
    var arrSize = data.todas.length

    for (var i = 0; i < arrSize; i++) {
      var position = {
        lat: parseFloat(data.todas[i].lat),
        lng: parseFloat(data.todas[i].lng)
      }

      new google.maps.Marker({
        position: position,
        map: map
      })
    }
  })
