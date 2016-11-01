
selectTab = (content)->
  $("#universal-access").hide()
  $("#improved-performance").hide()
  $("#improved-profitability").hide()
  $("#unique-functionality").hide()
  $(content).show()

nextTab = () ->
  if $("#hero").is(":hover")
    return
  if window.youtube_playing
    return

  $(".fade","#universal-access").show()
  if $("#universal-access").is(":visible")
    selectTab("#improved-performance")
  else if $("#improved-performance").is(":visible")
    selectTab("#improved-profitability")
  else if $("#improved-profitability").is(":visible")
    selectTab("#unique-functionality")
  else if $("#unique-functionality").is(":visible")
    selectTab("#universal-access")

selectContact = (content,button)->
  $("#new-zealand").hide()
  $("#melbourne").hide()
  $("#sydney").hide()
  $("#usa").hide()
  $(content).show()

  $("#new-zealand-contact-details").removeClass("selected")
  $("#melbourne-contact-details").removeClass("selected")
  $("#sydney-contact-details").removeClass("selected")
  $("#usa-contact-details").removeClass("selected")
  $(button).addClass("selected")

$ ->
  $(".universal-access-button").click ->
    selectTab("#universal-access")
  $(".improved-performance-button").click ->
    selectTab("#improved-performance")
  $(".improved-profitability-button").click ->
    selectTab("#improved-profitability")
  $(".unique-functionality-button").click ->
    selectTab("#unique-functionality")
  $("#new-zealand-contact-details").click ->
    selectContact("#new-zealand","#new-zealand-contact-details")
  $("#melbourne-contact-details").click ->
    selectContact("#melbourne","#melbourne-contact-details")
  $("#usa-contact-details").click ->
    selectContact("#usa","#usa-contact-details")
  $("#sydney-contact-details").click ->
    selectContact("#sydney","#sydney-contact-details")
	setInterval( ( ->
    nextTab()
	) , 4500)
