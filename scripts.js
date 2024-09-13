// Smooth scroll for section transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add a submit event listener to the form (basic form validation)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  