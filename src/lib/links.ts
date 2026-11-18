// Demo web de AXIS: carpeta public/demo (la copia scripts/publish-demo.js del repo de la app).
// BASE_URL respeta la base de Vite (vite.config.ts → base).
export const DEMO_URL = `${import.meta.env.BASE_URL}demo/`;

// WhatsApp de ventas (Bolivia +591)
const WHATSAPP_NUMBER = "59179363675";
export const whatsappUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_INFO = whatsappUrl("Hola, quiero saber más de AXIS");
export const WHATSAPP_INSTALL = whatsappUrl("Hola, quiero agendar la instalación de AXIS");
export const WHATSAPP_QUOTE = whatsappUrl("Hola, quiero una cotización de AXIS para mi tienda");
