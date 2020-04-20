$('#myModal').on('shown.bs.modal', function (e) {
  var button = e.relatedTarget
  $('#confirmbtn').on('click', function () {
    var card = button.parentNode.parentNode.parentNode
    if (card == null) {
      return
    }

    var number = card.getElementsByClassName('card-header')[0].id.slice(-1)
    while (card.firstChild) {
      card.removeChild(card.firstChild)
    }

    var orgcard = card

    if (card.nextElementSibling != null) {
      while (card.nextElementSibling) {
        card = card.nextElementSibling
        var header = card.getElementsByClassName('card-header')[0]
        var string = 'listing' + number
        header.id = string
        string = 'Listing #' + number
        header.innerHTML = string
        number++
      }
    }
    orgcard.parentNode.removeChild(orgcard)
  })
})

$('#myModal').on('hidden.bs.modal', function () {
  $('#confirmbtn').off('click')
})
