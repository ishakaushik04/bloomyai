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

// Optional: Custom fetch handling instead of Formspree redirect
// Uncomment below if you want custom success handling

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