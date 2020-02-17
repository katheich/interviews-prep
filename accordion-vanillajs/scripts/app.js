function main() {

  const items = document.querySelectorAll('.accordion')
  console.log(items)

  function toggle(e) {
    const panel = e.target.nextElementSibling

    if (panel.classList.contains('selected')) {
      panel.classList.remove('selected')
    } else {
      panel.classList.add('selected')
    }
  }

  items.forEach((item) => {
    item.addEventListener('click', toggle)

  })

}

document.addEventListener('DOMContentLoaded', main)
