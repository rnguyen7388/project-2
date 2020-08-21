/*eslint-disable*/
$("#currentUser").removeAttr("style");
$(".userSmall").removeAttr("style");

$("#postBtn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newPost object
    let newPost = {
      neighborhood: $("#currentNeighborhood").text(),
      title: $("#newTitle").val().trim(),
      text: $("#newPost").val().trim(),
      UserId: $("#userId").val()
    };
  
    console.log(newPost);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/post", newPost)
      // On success, run the following code
      .then(function(results) {
  
        let row = $("<div>");
        row.addClass("posts");
  
        row.append(
          `<section class ="forum">
        <p class="title">${results.title}</p>
        <div class="post">${results.text}</div>
        <div class="taskBar">
            <div class="likes">
                ${results.likes}
                <button class="likeBtn">
                    <img src="https://i.postimg.cc/Zqyx30dD/like.png" alt="Like Icon" class="likeImg">
                </button>
            </div>
        </div>
        </section>`)
        console.log(row);
        $("#postContainer").prepend(row);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#newTitle").val("");
    $("#newPost").val("");
  });
;
  