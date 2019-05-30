// ...
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }

var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}



//exterior links open in new window
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
    
window.onscroll = function() {myFunction()};
      
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}