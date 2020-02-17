function main() {

  const items = $('.accordion')

  function toggle(e, i) {
    $('.accordion-panel').eq(i).toggleClass('selected')
  }

  for (let i = 0; i < items.length; i++) {
    $('.accordion').eq(i).click((e) => toggle(e, i))
  }
}

$(document).ready(main)