

/**
 * @function loadMap
 * @description Loads the Google Maps
 */
const loadMap = () => {
    // The location of Ernakulam
    const ernakulam = { lat: 9.9816, lng: 76.2999 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: ernakulam,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}