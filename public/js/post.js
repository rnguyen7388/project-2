/*eslint-disable*/
$("#postBtn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newPost object
    let newPost = {
      neighborhood: $("#currentNeighborhood").text(),
      title: $("#newTitle").val().trim(),
      text: $("#newPost").val().trim(),
      author: $("#currentUser").text(),
      UserId: $("#userId").val()
    };
  
    console.log(newPost);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/post", newPost)
      // On success, run the following code
      .then(function() {
  
        let row = $("<div>");
        row.addClass("posts");
  
        row.append("<p>" + newPost.author + " posted: </p>");
        row.append("<p>" + newPost.text + "</p>");
  
        $("#post-area").prepend(row);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#post-box").val("");
  });

  $.get("/api/allPosts", function(data) {

    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var row = $("<div>");
        row.addClass("posts");
        row.append("<p>" + data[i].author + " posted: </p>");
        row.append("<p>" + data[i].post + "</p>");
        $("#post-area").prepend(row);
      }
    }
  });
  