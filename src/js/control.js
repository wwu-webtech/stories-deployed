var body = document.getElementById('climate-change');
var html = document.getElementsByTagName('html');
var aosElements = document.getElementsByClassName('aos-init');

var navWrapper = document.getElementsByClassName('chapter-navigation')[0];
var chapterToggle = document.getElementsByClassName('chapter-navigation-toggle')[0];

chapterToggle.onclick = function() {
  if (chapterToggle.classList.contains('closed')) {
    navWrapper.classList.remove('closed');
    navWrapper.classList.add('open');
    chapterToggle.classList.remove('closed');
    chapterToggle.classList.add('open');
    chapterToggle.innerHTML = '<span class="material-icons" aria-hidden="true">menu_open</span><br/><span class="button-text visually-hidden">Close the </span>Menu';
  }
  else {
    navWrapper.classList.remove('open');
    navWrapper.classList.add('closed');
    chapterToggle.classList.remove('open');
    chapterToggle.classList.add('closed');
    chapterToggle.innerHTML = '<span class="material-icons" aria-hidden="true">menu</span><br/><span class="button-text visually-hidden">Open the </span>Menu';
  }
}
