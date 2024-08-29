import { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PK } from 'astro:env/client'
import { emailRegex, nameRegex } from './regex';

emailjs.init(EMAILJS_PK);

const btn = document.getElementById('buttonForm');
const form = document.getElementById('contactForm')

function validateData() {
  let error = false;
  const from_name = document.getElementById("from_name");
  const message_id = document.getElementById("message_id");
  const message = document.getElementById("message");

  if (from_name.value === "") {
    from_name.nextElementSibling.innerHTML = "El nombre no puede quedar vacio"
    error = true;
  }else if(!nameRegex.test(from_name.value)){
    from_name.nextElementSibling.innerHTML = "Debe ser un nombre valido"
    error = true;
  }

  if (message_id.value === "") {
    message_id.nextElementSibling.innerHTML = "El email no puede quedar vacio"
    error = true;
  }else if(!emailRegex.test(message_id.value)){
    message_id.nextElementSibling.innerHTML = "Debe ser un email valido"
    error = true;
  }

  if (message.value === "") {
    message.nextElementSibling.innerHTML = "El mensaje no puede quedar vacio"
    error = true;
  }

  return error;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateData()) {
    btn.innerHTML = 'Enviando...';

    const serviceID = EMAILJS_SERVICE;
    const templateID = EMAILJS_TEMPLATE;

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerHTML = 'Enviar';
        alert('Email Enviado!');
      }, (err) => {
        btn.innerHTML = 'Enviar';
        alert(JSON.stringify(err));
      });
  }

});