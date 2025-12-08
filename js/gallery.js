$(window).load(function() {

  $("section .galleryImg img").click(function() {
    $(".lightbox").fadeIn(300);
    $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
    $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
    $(".title").append("<h1>" + $(this).attr("alt") + "</h1>");
    $("html").css("overflow", "hidden");
    if ($(this).is(":last-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    } else if ($(this).is(":first-child")) {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "none");
    } else {
      $(".arrowr").css("display", "block");
      $(".arrowl").css("display", "block");
    }
  });

  $(".close").click(function() {
    $(".lightbox").fadeOut(300);
    $("h1").remove();
    $(".lightbox img").remove();
    $("html").css("overflow", "auto");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $(".lightbox").fadeOut(300);
      $(".lightbox img").remove();
      $("html").css("overflow", "auto");
    }
  });

  $(".arrowr").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var nextImg = search.closest(".galleryImg").next().find("img");
  
    var newImage = nextImg.attr("src");
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");
  
    if (nextImg.closest(".galleryImg").is(":last-child")) {
      $(".arrowr").css("display", "none");
    }
    $(".arrowl").css("display", "block");
  });
  

  $(".arrowl").click(function() {
    var imgSrc = $(".lightbox img").attr("src");
    var search = $("section").find("img[src$='" + imgSrc + "']");
    var prevImg = search.closest(".galleryImg").prev().find("img");
  
    var newImage = prevImg.attr("src");
    $(".lightbox img").attr("src", newImage);
    $(".filter").css("background-image", "url(" + newImage + ")");
  
    if (prevImg.closest(".galleryImg").is(":first-child")) {
      $(".arrowl").css("display", "none");
    }
    $(".arrowr").css("display", "block");
  });
  

});