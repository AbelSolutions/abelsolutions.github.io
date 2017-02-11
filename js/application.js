$(function() {

  $(".fade").each(function(evt){
    $(this).load(function(evt){
        $(this).fadeIn(1000);
        $(this).show();
    });
  });

  if ($('video').is('*')) {
      $('body').append('<link href="http://vjs.zencdn.net/c/video-js.css" rel="stylesheet">')
      $('body').append('<script src="http://vjs.zencdn.net/c/video.js"></script>')
  }


  let selectTab = function(content){
    $("#universal-access").hide();
    $("#improved-performance").hide();
    $("#improved-profitability").hide();
    $("#unique-functionality").hide();
    return $(content).show();
  };

  let nextTab = function() {
    if ($("#hero").is(":hover")) {
      return;
    }
    if (window.youtube_playing) {
      return;
    }

    $(".fade","#universal-access").show();
    if ($("#universal-access").is(":visible")) {
      return selectTab("#improved-performance");
    } else if ($("#improved-performance").is(":visible")) {
      return selectTab("#improved-profitability");
    } else if ($("#improved-profitability").is(":visible")) {
      return selectTab("#unique-functionality");
    } else if ($("#unique-functionality").is(":visible")) {
      return selectTab("#universal-access");
    }
  };

  let selectContact = function(content,button){
    $("#new-zealand").hide();
    $("#melbourne").hide();
    $("#sydney").hide();
    $("#usa").hide();
    $(content).show();

    $("#new-zealand-contact-details").removeClass("selected");
    $("#melbourne-contact-details").removeClass("selected");
    $("#sydney-contact-details").removeClass("selected");
    $("#usa-contact-details").removeClass("selected");
    return $(button).addClass("selected");
  };

  $(function() {
    $(".universal-access-button").click(() => selectTab("#universal-access"));
    $(".improved-performance-button").click(() => selectTab("#improved-performance"));
    $(".improved-profitability-button").click(() => selectTab("#improved-profitability"));
    $(".unique-functionality-button").click(() => selectTab("#unique-functionality"));
    $("#new-zealand-contact-details").click(() => selectContact("#new-zealand","#new-zealand-contact-details"));
    $("#melbourne-contact-details").click(() => selectContact("#melbourne","#melbourne-contact-details"));
    $("#usa-contact-details").click(() => selectContact("#usa","#usa-contact-details"));
    return $("#sydney-contact-details").click(() => selectContact("#sydney","#sydney-contact-details"));
  });
  setInterval( ( () => nextTab()) , 4500);

});
