function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
    } else {
        document.getElementById('form-message').textContent = 'Please fill in all fields.';
    }
});

// Initialize the home page as the default visible page
showPage('home');
