const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a nav link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Scroll reveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });



// Get the modal
const modal = document.getElementById("bookingModal");

// Get all buttons that open the modal
const bookButtons = document.querySelectorAll("#bookNowButton");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on a BOOK NOW button, open the modal
bookButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;

    // You can now send this data to your server or handle it as needed
    console.log("Booking Details:", { name, email, checkin, checkout, roomType });

    // Close the modal after submission
    modal.style.display = "none";

    // Optionally, show a confirmation message
    alert("Thank you for your booking! We will contact you shortly.");
});
