$(document).ready(splahPage);

// vista SPLASH
function splahPage() {
  setTimeout(function() {
    $('.fly-in-text').removeClass('hidden');
  }, 500);
  setTimeout(function() {
    window.location.href = 'views/view-1.html';
  }, 5000);
}; 