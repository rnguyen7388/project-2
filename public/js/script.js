$("path").click(function() {
  console.log(this);
});

$("#changeCity").click(function() {
   window.locate = "/map";
  console.log("changeCity");
});
