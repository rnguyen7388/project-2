/*eslint-disable*/
$("#currentUser").removeAttr("style");
$(".userSmall").removeAttr("style");
$(".navbar-brand").removeAttr("style")

$("#postBtn").on("click", function(event) {
  event.preventDefault();

  // Make a newPost object
  let newPost = {
    neighborhood: $("#currentNeighborhood").text(),
    title: $("#newTitle")
      .val()
      .trim(),
    text: $("#newPost")
      .val()
      .trim(),
    UserId: $("#userId").val(),
  };


  if (newPost.title === "" && newPost.text == "") {
    alert("Posts must include a subject and message.")
    return
  }
  else if (newPost.text === "") {
    alert("Posts must include a message.")
    return
  }
  else if (newPost.title === "") {
    alert("Posts must include a subject.")
    return
  }

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
                <button class="likeBtn">
                    <span id=“likes”>0</span>
                    <img src="https://i.postimg.cc/Zqyx30dD/like.png" alt="Like Icon" class="likeImg">
                </button>
            </div>
        </div>
        </section>`
      );
      console.log(row);
      $("#postContainer").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#newTitle").val("");
  $("#newPost").val("");
});



var i = 0;
var txt = $(".neighborhood").text();
$(".neighborhood").text("")
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    $(".neighborhood").append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(function () {
  typeWriter();
}, 500);

// var count = results.likes

// $(".likeBtn").on("click", function () {
//   count++;
//   $("this").text(count);
//   console.log(count);
// })

// we need to target the buttons individually
// ?right now its collective