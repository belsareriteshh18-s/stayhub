if (
    typeof mapToken !== "undefined" &&
    typeof coordinates !== "undefined" &&
    document.getElementById("map")
) {
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates,
        zoom: 12
    });

    new mapboxgl.Marker({ color: "#ff385c" })
        .setLngLat(coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 })
                .setText("Your StayHub destination")
        )
        .addTo(map);

    map.addControl(new mapboxgl.NavigationControl());
}