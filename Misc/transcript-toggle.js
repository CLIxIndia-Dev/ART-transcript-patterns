const toggle = () => {
  const mediaNavs = document.querySelectorAll('.media-nav')

  Array.prototype.forEach.call(mediaNavs, mediaNav => {
    let btn = mediaNav.querySelector('.transcript-toggle')
    let target = mediaNav.nextElementSibling

    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false

      btn.setAttribute('aria-expanded', !expanded)
      target.hidden = expanded
    }
  })
}

window.onload = toggle;
