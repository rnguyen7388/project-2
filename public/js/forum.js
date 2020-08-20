$(document).ready(() => {
    let neighborhood = $("#currentNeighborhood").text();
    console.log(neighborhood);

    $.get("/api/neighborhood/" + neighborhood, function(data) {
        console.log(data);
    });
});
