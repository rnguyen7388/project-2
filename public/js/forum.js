$(document).ready(() => {
    let neighborhood = user.neighborhood;
    console.log(neighborhood);

    $.get("/api/neighborhood/" + neighborhood).then(data => {
        console.log(data);
    });
});
