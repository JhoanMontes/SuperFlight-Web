window.addEventListener("scroll", function() {
    let header = document.querySelector(".header-container");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });