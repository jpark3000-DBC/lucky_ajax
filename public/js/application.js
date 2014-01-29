$(document).ready(function () {
  $("#form").submit(function( event ) {
    event.preventDefault();
    var posting = $.post("/rolls", $("#form").serialize() );
    posting.done(function(data) {
      $("#die_image").html(data);
    });
  });
});
