if (document.readyState == 'loading') {
     document.addEventListener('DOMContentLoaded', ready)
} else {
     ready()
}
function ready() {

     window.onload = function () {
          document.getElementById('spin').classList.add('fade-out')
          document.getElementById('spin').style.display = "none"
          document.getElementById('content').style.display = "block"
          var url = window.location.href;
          if (url == 'http://127.0.0.1:8000/home/' || url == 'http://127.0.0.1:8000/') {
               document.getElementById('home').classList.add('active')
               document.getElementById('header').classList.add('mb-auto')
               document.getElementById('div-cover').classList.add('cover-container')
               document.getElementById('about').classList.remove('active')
               document.getElementById('project').classList.remove('active')
          }
          if (url == 'http://127.0.0.1:8000/about/') {
               document.getElementById('home').classList.remove('active')
               document.getElementById('header').classList.remove('mb-auto')
               document.getElementById('about').classList.add('active')
               document.getElementById('project').classList.remove('active')
               document.getElementById('div-cover').classList.add('cover-container')
          }
          if (url == 'http://127.0.0.1:8000/project/') {
               document.getElementById('project').classList.add('active')
               document.getElementById('home').classList.remove('active')
               document.getElementById('div-cover').classList.remove('cover-container')
               document.getElementById('header').classList.remove('mb-auto')
               document.getElementById('about').classList.remove('active')
          }
     };
}
$(window).load(function(){
     $('#spin').fadeOut();
     $('#spin').delay(150).fadeOut('slow');
 }),4000;