function init() {
    var heightWindow = $(window).height();
    $("#map").css("height",heightWindow);
    var widthBotton = $(window).width();
    $("#boton").css("width",widthBotton - 10);
    $("#boton").css("margin-left","5px");
    
    initMap();
    $("#boton-request").click(setPickup);
}

function iconClick() {
    $("#list-cars").toggle();
}

function setPickup() {
}