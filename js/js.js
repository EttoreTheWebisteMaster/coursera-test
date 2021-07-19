function overBottone(element) {
    element.style.animationName = "onCartaOver";
}

function outBottone(element) {
    element.style.animationName = "onCartaOut";
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.070, lng: 7.686 },
    zoom: 10,
  });

  new google.maps.Marker({
      position: { lat: 45.070, lng: 7.686 },
      map: map,
      title: "Studio di Massimo Borla",
      animation: google.maps.Animation.DROP
  });
}