window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollPosition > 700) {
      myDiv.classList.add('scrolled');
      myDiv.classList.remove('original');
    } else {
      myDiv.classList.remove('scrolled');
      myDiv.classList.add('original');
    }
  });