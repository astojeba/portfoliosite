console.log("Hi, welcome to my portfolio site!\n\nDon't hesitate to get in touch with me should you be looking for someone to collaborate with for UX-related projects!")

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });

});

$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
