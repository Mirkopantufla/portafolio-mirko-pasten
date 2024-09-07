import { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PK } from 'astro:env/client'
import { emailRegex, nameRegex } from './regex';
import emailjs from '@emailjs/browser';

emailjs.init(EMAILJS_PK);

const btn = document.getElementById('buttonForm') as HTMLButtonElement;
const form = document.getElementById('contactForm') as HTMLFormElement;

function validateData() {
  let error = false;
  const from_name = document.getElementById("from_name") as HTMLInputElement;
  let from_name_error = from_name.nextElementSibling?.innerHTML as string
  const message_id = document.getElementById("message_id") as HTMLInputElement;
  let message_id_error = from_name.nextElementSibling?.innerHTML as string
  const message = document.getElementById("message") as HTMLInputElement;
  let message_error = from_name.nextElementSibling?.innerHTML as string

  if (from_name.value === "") {
    from_name_error = "El nombre no puede quedar vacio"
    error = true;
  }else if(!nameRegex.test(from_name.value)){
    from_name_error = "Debe ser un nombre valido"
    error = true;
  }else{
    from_name_error = ""
    from_name.style.outline = "3px solid green"
  }

  if (message_id.value === "") {
    message_id_error = "El email no puede quedar vacio"
    error = true;
  }else if(!emailRegex.test(message_id.value)){
    message_id_error = "Debe ser un email valido"
    error = true;
  }else{
    message_id_error = ""
    message_id.style.outline = "3px solid green"
  }

  if (message.value === "") {
    message_error = "El mensaje no puede quedar vacio"
    error = true;
  }else{
    message_error = ""
    message.style.outline = "3px solid green"
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