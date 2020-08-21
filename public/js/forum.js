/*eslint-disable*/
$(document).ready(() => {
    let postContainer = $("postContainer")
    let neighborhood = $("#currentNeighborhood").text();
    let posts;
    console.log(neighborhood);

    $("#currentUser").removeAttr("style");
    $(".userSmall").removeAttr("style");

    function getPosts() {
        $.get("/api/neighborhood/" + neighborhood, function(data) {
        console.log(data);
        posts = data;
        if (!posts || !posts.length) {
            return;
          }
          else {
            initializeRows();
          }
        console.log(posts);
    });
    }
    

    function initializeRows() {
        postContainer.empty();
        let postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
          postsToAdd.push(createNewRow(posts[i]));
        }
        postContainer.append(postsToAdd);
      }
});
