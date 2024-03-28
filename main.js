document.addEventListener( 'DOMContentLoaded', function () {
    var root = document.body.style;
  
    // Initialize variables
    let scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    root.setProperty('--scroll', scrollValue);
    
  
    // Scroll events
    window.addEventListener('scroll',scroll,false);
    function scroll() {
      let scrollValue = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      // Limit max scroll to 1
      scrollValue = scrollValue > 1 ? 1 : scrollValue;
      root.setProperty('--scroll', scrollValue);
    }
  });