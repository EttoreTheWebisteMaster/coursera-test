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
  window.location.replace(nome +".html");
}

function mostraPopover(element, titolo, testo = null, immagine = null) {
  if(element.classList.contains("popoverAperto")) {
    element.classList.remove("popoverAperto");
    element.removeChild(element.firstChild);
    element.removeChild(element.lastElementChild);
  } else {
    let popover = 
    '<div class="popoverContainer">' +
      '<div class="popover">' +
        '<div class="popoverArrow"></div>' +
  
        '<div class="titoloPopover">' +
          titolo +
        '</div>' +
  
        '<div class="testoPopover">' +
            testo +
        '</div>' +
      '</div>' +
    '</div>';
  
    element.insertAdjacentHTML('afterbegin', popover);
    element.insertAdjacentHTML('beforeend', '<i class="fas fa-times-circle chiudiPopover"></i>');
    element.classList.add("popoverAperto");
  }
}