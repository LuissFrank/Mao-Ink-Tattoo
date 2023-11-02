// Animación para mostrar/ocultar el botón de WhatsApp
const whatsappButton = document.getElementById('whatsapp-button');

whatsappButton.addEventListener('click', () => {
   window.location.href = 'https://walink.co/5e4c2a';
});

// Agrega una animación de entrada
whatsappButton.style.transform = 'scale(0)';
setTimeout(() => {
  whatsappButton.style.transform = 'scale(1)';
}, 1000);

