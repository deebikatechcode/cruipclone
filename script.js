window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var body = document.querySelector('body');

  // Get the height of the header
  var headerHeight = header.offsetHeight;

  // Check if the user has scrolled past the header
  if (window.scrollY >= headerHeight) {
      // Add a class to the header and body to make them transparent
      header.classList.add('transparent-header');
      body.classList.add('transparent-body');
  } else {
      // Remove the class if the user scrolls back up
      header.classList.remove('transparent-header');
      body.classList.remove('transparent-body');
  }
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

//menu hamburger
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

//AOS
AOS.init();



