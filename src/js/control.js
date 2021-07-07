var animationsOn = true;
var animationToggle = document.getElementById('animationToggle');
var body = document.getElementById('climate-change');
var html = document.getElementsByTagName('html');
var aosElements = document.getElementsByClassName('aos-init');

var navWrapper = document.getElementsByClassName('chapter-navigation')[0];
var chapterToggle = document.getElementsByClassName('chapter-navigation-toggle')[0];

animationToggle.onclick = function() {

  if (animationToggle.classList.contains('animations-enabled')) {
    animationsOn = false;

    animationToggle.classList.remove('animations-enabled');
    animationToggle.classList.add('animations-disabled');

    animationToggle.innerHTML = 'Enable animations';
    animationState.innerText = "disabled";

    body.classList.add('animations-off');
    html[0].classList.add('animations-off');
    body.classList.remove('animations-on');
    html[0].classList.remove('animations-on');

    for (each of aosElements) {
      each.removeAttribute('data-aos');
    }
  }

  else {
    window.location.reload();
  }
}

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  var halfway = window.innerHeight / 2;
  return (
    bounding.top <= halfway
  );
};

chapterToggle.onclick = function() {
  if (chapterToggle.classList.contains('closed')) {
    navWrapper.classList.remove('closed');
    navWrapper.classList.add('open');
    chapterToggle.classList.remove('closed');
    chapterToggle.classList.add('open');
    chapterToggle.innerHTML = '<span class="material-icons" aria-hidden="true">menu_open</span><span class="button-text visually-hidden">Close the chapter navigation menu</span>';
  }
  else {
    navWrapper.classList.remove('open');
    navWrapper.classList.add('closed');
    chapterToggle.classList.remove('open');
    chapterToggle.classList.add('closed');
    chapterToggle.innerHTML = '<span class="material-icons" aria-hidden="true">menu</span><span class="button-text visually-hidden">Open the chapter navigation menu</span>';
  }
}

/* Glacier */
var glacier = document.querySelector('.glacier');
window.addEventListener('scroll', function (event) {
  if (isInViewport(glacier)) {
    glacier.classList.add('animate');
  }
}, false);
