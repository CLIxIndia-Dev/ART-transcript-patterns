const toggle = () => {
  const classes = {
    containerHasFocus: 'container--has-focus'
  };
  const mediaNavs = document.querySelectorAll('.media-nav')

  Array.prototype.forEach.call(mediaNavs, mediaNav => {

    let art = mediaNav.querySelector('.audio-select')
    let btn = mediaNav.querySelector('.transcript-toggle')
    let target = mediaNav.nextElementSibling

    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false

      btn.setAttribute('aria-expanded', !expanded)
      target.hidden = expanded
    }

    // Add the focus class to the container if the keyboard
    // event is an element within the container
    document.addEventListener('keyup', (e) => {
        if (mediaNav.contains(e.target)) {
            mediaNav.classList.add(classes.containerHasFocus);
        } else {
            mediaNav.classList.remove(classes.containerHasFocus);
        }
    });

    // Remove the focus class on mouse click
    document.addEventListener('mousedown', (e) => {
        if (mediaNav.contains(e.target)) {
            mediaNav.classList.remove(classes.containerHasFocus);
        }
    });

  })


}

window.onload = toggle;
