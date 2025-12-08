const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", scrollToTop);
// Show/hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      // scrollToTopBtn.style.display = "block";
      $('#scrollToTopBtn').addClass('active');
    } else {
      // scrollToTopBtn.style.display = "none";
      $('#scrollToTopBtn').removeClass('active');
    }
  });


  // clickable menus in mobile //
 
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 992) {
      document.querySelectorAll('.navbar .dropdown-toggle').forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
          let nextEl = this.nextElementSibling;
          if (nextEl && nextEl.classList.contains('dropdown-menu')) {
            event.preventDefault();
            if (nextEl.style.display === 'block') {
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
          }
        });
      });
    }
  });



  // funtion for jump link when click on that it will close the menu in mobile //
  document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector(".navbar-collapse");
  
    document.querySelectorAll(".navbar-nav a").forEach(function (navLink) {
      navLink.addEventListener("click", function (event) {
        let parent = this.parentElement;
  
        // Check if the clicked link is inside a dropdown or submenu
        let isDropdown = parent.classList.contains("dropdown") || parent.classList.contains("dropdown-submenu");
  
        // Close menu if it's not a dropdown or submenu
        if (!isDropdown && window.innerWidth < 992) {
          navbarCollapse.classList.remove("show");
          navbarToggler.classList.add("collapsed");
          navbarToggler.setAttribute("aria-expanded", "false");
  
          // Manually trigger Bootstrap collapse (for consistency)
          let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });