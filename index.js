const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bot de WhatsApp en Node.js está funcionando ✅');
});

app.post('/webhook', (req, res) => {
  const mensaje = req.body.message?.text?.body?.toLowerCase() || "";

  console.log("Mensaje recibido:", mensaje);

  let respuesta = "";

  if (mensaje.includes("hola") || mensaje.includes("buenas")) {
    respuesta = "¡Hola! Soy Paula, asesora de Unique Cliniq 😊 ¿En qué tratamiento dental estás interesad@? Podemos ayudarte con carillas, implantes, ortodoncia y más.";
  } 
  else if (mensaje.includes("carilla")) {
    respuesta = "¡Las carillas ultrafinas son una pasada! 😁 No requieren tallado ni provisionales. ¿Te gustaría ver cómo quedarían en tu sonrisa con un mockup digital gratuito?";
  } 
  else if (mensaje.includes("implante")) {
    respuesta = "Claro, trabajamos con implantes de última generación. ¿Estás buscando reemplazar alguna pieza dental?";
  } 
  else if (mensaje.includes("ortodoncia") || mensaje.includes("alineadores")) {
    respuesta = "Perfecto. Tenemos ortodoncia invisible y tradicional. ¿Prefieres algo discreto o lo más económico?";
  } 
  else if (mensaje.includes("cita")) {
    respuesta = "Podemos agendar una cita directamente por aquí o pasarte un enlace para que elijas el día que mejor te venga. ¿Qué prefieres?";
  } 
  else {
    respuesta = "¡Gracias por escribirnos! 😄 Cuéntame un poco más sobre lo que necesitas y te ayudamos encantados.";
  }

  console.log("Respuesta generada:", respuesta);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
