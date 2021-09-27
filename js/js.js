window.onload = function() {
  window.history.pushState("", "Index", "http://localhost/--%20Siti%20--/Massimo%20Borla/Massimo%20Borla/")
};

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

function apriScheda(nome) {
  //window.history.pushState("", nome, "http://localhost/--%20Siti%20--/Massimo%20Borla/Massimo%20Borla/"+ nome +".html");
  window.location.replace(nome +".html");
}