// Check off specific todos by clicking

$("li").click(function() {
  $(this).css("color", "red");
  $(this).css("text-decoration", "line-through");
});
