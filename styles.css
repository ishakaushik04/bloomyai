// Smooth scroll for any future internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission handling
const form = document.getElementById('waitlist-form');
const button = form.querySelector('button');
const originalButtonText = button.textContent;

form.addEventListener('submit', function(e) {
  // Let Formspree handle the actual submission
  // Just update UI to show it's processing
  button.textContent = 'Joining...';
  button.disabled = true;
});

// If using Formspree, it will redirect or show confirmation
// If you want custom handling, prevent default and use fetch instead:

/*
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = form.querySelector('input[name="email"]').value;
  
  button.textContent = 'Joining...';
  button.disabled = true;
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      button.textContent = '✓ You\'re on the list!';
      button.style.background = '#4caf50';
      form.querySelector('input').value = '';
      
      setTimeout(() => {
        button.textContent = originalButtonText;
        button.style.background = '';
        button.disabled = false;
      }, 3000);
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    button.textContent = 'Try again';
    button.disabled = false;
    alert('Something went wrong. Please try again.');
  }
});
*/

// Fade in elements on scroll (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Header fades in immediately
document.querySelector('header').style.opacity = '1';
