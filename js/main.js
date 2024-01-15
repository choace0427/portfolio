hideSVG('hammer');
hideSVG('case');
hideSVG('body');
hideSVG('mouse');
hideSVG('computer');

function hideSVG(elementID) {
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
}

function retractSVG(elementID) {
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-out';
  path.style.strokeDasharray = length + ' ' + length;
  path.getBoundingClientRect();
  path.style.strokeDashoffset = length;
}

function animateSVG(elementID) {
  var path = document.getElementById(elementID);
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10s ease';
  path.style.strokeDashoffset = '0';
}

$('.scroll_item').on('click', function () {
  var elem = $('#' + $(this).data('page')).click();
});

var div = document.getElementById('fadetitle'),
  letters = div.textContent.split('');

while (div.hasChildNodes()) div.removeChild(div.firstChild);
for (var i = 0; i < letters.length; i++) {
  var letter = document.createElement('span'),
    style = 'opacity ' + Math.random() * 1 + 's linear';
  letter.appendChild(document.createTextNode(letters[i]));
  letter.style.WebKitTransition =
    letter.style.MozTransition =
    letter.style.MSTransition =
    letter.style.OTransition =
    letter.style.transition =
      style;
  letter.style.opacity = 0;
  div.appendChild(letter);
}
setTimeout(function () {
  for (var i = 0; i < div.childNodes.length; i++) {
    div.childNodes[i].style.opacity = 1;
  }
}, 0);

var images = [];
var i = 0;

function preloadImage(e) {
  img = new Image();
  img.src = e;
  images[i++] = img;
}

$('document').ready(function () {
  makeDotActive('projectstext');
  $('#svgtitle').show();
  preloadImage('images/background.webp');
  $('#thumbs-up').attr('src', 'images/thumbs-up.webp');
  $('.headshot').attr('src', 'images/headshot.webp');
  $('.headshot-pixel').attr('src', 'images/headshot-pixel.webp');
  $('.painting').attr('src', 'images/recreation-of-childhood-painting.png');
  setTimeout(function () {
    $('#dyno').css('background-image', 'url(images/background.webp)');
  }, 600);
  $('#introtext').click(function () {
    animateSVG('body');
    hideInnerBG();
    swap('#about');
    makeDotActive('introtext');
  });
  $('#abouttext').click(function () {
    animateSVG('hammer');
    hideInnerBG();
    swap('#about-background');
    makeDotActive('abouttext');
  });
  $('#aboutmoretext').click(function () {
    animateSVG('case');
    hideInnerBG();
    swap('#experience');
    makeDotActive('aboutmoretext');
  });
  $('#experiencetext').click(function () {
    animateSVG('mouse');
    animateSVG('computer');
    hideInnerBG();
    swap('#projects');
    makeDotActive('experiencetext');
  });
  $('#projectstext').click(function () {
    hideInnerBG();
    retractSVG('mouse');
    retractSVG('computer');
    retractSVG('hammer');
    retractSVG('body');
    retractSVG('case');
    swap('#intro');
    setTimeout(function () {
      $('#dyno').css('background-image', 'url(images/background.webp)');
    }, 50);
    makeDotActive('projectstext');
  });
  // $('#resumetext').click(function () {
  //   retractSVG('mouse');
  //   retractSVG('computer');
  //   retractSVG('hammer');
  //   retractSVG('body');
  //   retractSVG('case');
  //   swap('#intro');
  //   $('#dyno').addClass('fading');
  //   setTimeout(function () {
  //     $('#dyno').css('background-image', 'url(images/background.webp)');
  //   }, 50);
  //   makeDotActive('resumetext');
  // });
});

function makeDotActive(dotText) {
  var elem = $('#dot' + dotText);
  elem
    .addClass('scroll_item_active')
    .siblings('.scroll_item_active')
    .removeClass('scroll_item_active');
}

function hideInnerBG() {
  $('#dyno').removeClass('fading');
  $('#dyno').css('background-image', 'url(images/white.jpg)');
  $('#dyno').css('background-color', 'white');
}

function swap(e) {
  $('.inner-body section:not(' + e + ')').each(function () {
    $(this).fadeOut(250);
  });
  $('.inner-body section:not(' + e + ')')
    .promise()
    .done(function () {
      $('#dyno').scrollTop(0);
      $(e).fadeIn(250);
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
