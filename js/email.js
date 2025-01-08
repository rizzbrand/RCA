document.addEventListener('DOMContentLoaded', function() {


emailjs.init('xOQNUcKCzgxcTUthW');

const form = document.getElementById('contactform');
const submitBtn = document.querySelector('.submit-btn');

if (form && submitBtn) {
    submitBtn.onclick = function (event) {
        event.preventDefault();
        console.log('submit button clicked');

        if (typeof form.requestSubmit == 'function') {
            form.requestSubmit();
        } else {
            form.submit();
        }
    };

    form.onsubmit = function (event) {
        event.preventDefault();
    

  const formData = {
    name: document.getElementById('name').value,
    socialMedia: document.getElementById('socialMedia').value,
    email: document.getElementById('email').value,
    budget: document.getElementById('budget').value,
    message: document.getElementById('message').value

};

// if (!formData.name || !FormData.email || !formData.message) {
//     alert('please fill in all required fields (Name, Email, and Message).');
//     return;
// }

emailjs.send('service_8jym08t', 'template_ehob8oq', formData)
.then(function() {
    alert('Message Sent Successfully!');
    form.reset();

}, function(error) {
    alert('Failed to send message. Please try again.');
    console.error('Error:', error);

});

};
} else {
    console.error('submit button not found')
}
});