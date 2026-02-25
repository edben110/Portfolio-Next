import { memo } from 'react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573054789477?text=Hola%20Edben%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 
               rounded-full flex items-center justify-center text-white text-3xl 
               transition-all duration-300 hover:scale-110"
      style={{
        animation: 'pulse-glow 2s ease-in-out infinite'
      }}
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default memo(WhatsAppButton);
