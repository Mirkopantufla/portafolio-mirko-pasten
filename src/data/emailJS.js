import { EMAILJS_SERVICE, EMAILJS_TEMPLATE } from 'astro:env/client'

const btn = document.getElementById('buttonForm');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Enviando...';

   const serviceID = EMAILJS_SERVICE;
   const templateID = EMAILJS_TEMPLATE;

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.innerHTML = 'Send Email';
      alert(JSON.stringify(err));
    });
});