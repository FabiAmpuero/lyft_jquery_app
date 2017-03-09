function init() {
    var heightWindow = $(window).height();
    $("#map").css("height",heightWindow);
    var widthBotton = $(window).width();
    $("#boton").css("width",widthBotton - 10);
    $("#boton").css("margin-left","5px");
    $("#div-location").css("width",widthBotton - 10);
    $("#div-location").css("margin-left","5px");

    $("#boton-request").css("width",widthBotton - 10);
    $("#boton-request").css("margin-left","5px");
    
    $("#list-cars-dos").css("width",widthBotton - 10);
    $("#list-cars-dos").css("margin-left","5px");
    
    initMap();
    $('#icon-up').click(iconClick);
    $("#boton").click(setPickup);
    
    /*
    $("li").each(function(){
        $(this).click(pickCar);
    })*/
    
    $("#list-cars").on("click",".li",pickCar);
}

function pickCar(){
    var guardar = $("#name-car");
    var keep = this;
    console.log(keep);
    localStorage.setItem("namecar",this);
    
}


function iconClick() {
    $("#list-cars").toggle();
}

function setPickup() {
    $("#div-location").hide();
    $("#boton").hide();
    $("#list-cars").hide();
    $("#boton-request").show();
    $("#list-cars-dos").show();
    $("#boton-request").click(setRequest);
}

function setRequest() {
    $(location).attr("href","payment.html");
}

var miMapa;
function initMap() {
    
    var contentString = '<h1>Laboratoria</h1><br/><p><b>Laboratoria</b></p>';
    
    miMapa = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: {
                lat: -16.457736, 
                lng: -71.530440
            },
            zoom: 16
        }
    );
    
    var latLongPazPeru = {lat: -16.457736, lng: -71.530440};
    var latDos = {lat: -16.456736, lng: -71.530140};
    var latTres = {lat: -16.453736, lng: -71.530640};
    var latCuatro = {lat: -16.451736, lng: -71.530940};
    var latCinco = {lat: -16.459736, lng: -71.530340};
    
    var pazPeru = new google.maps.Marker({
    position: latLongPazPeru,
    map: miMapa,
    label: "l",
    icon: 'image/carrin.png',
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Aqui estamos!!!'
    });
    
    
    new google.maps.Marker({position: latDos, map: miMapa,
    label: "l",
    icon: 'image/carrin.png'});
    new google.maps.Marker({position: latTres, map: miMapa,
    label: "l",
    icon: 'image/carrin.png'});
    new google.maps.Marker({position: latCuatro, map: miMapa,
    label: "l",
    icon: 'image/carrin.png'});
    new google.maps.Marker({position: latCinco, map: miMapa,
    label: "l",
    icon: 'image/carrin.png'});
    
    var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
    
    pazPeru.addListener('click', function() {
    infowindow.open(map, pazPeru);
  });
    
    // al hacer click al carro tiene animacion
    //pero desenfoca lo que esta adelante :(
    pazPeru.addListener('click', toggleBounce);
    
    function toggleBounce() {
      if (pazPeru.getAnimation() !== null) {
        pazPeru.setAnimation(null);
      } else {
        pazPeru.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
}