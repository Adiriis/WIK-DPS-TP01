const http = require('http');   //Appel du module HTTP

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {    ///Definition de la route
    res.writeHead(200);   //Envoi des Headers de la requete comme msg
    const requestHeaders = req.headers;     //Récupérer les en-têtes de la requête
    const headersJSON = JSON.stringify(requestHeaders);     //Convertir les en-têtes en JSON
    res.end(headersJSON);     //Renvoyer les en-têtes en format JSON
  } else {
    res.writeHead(404); 
    res.end('')
  }
});

const PING_LISTEN_PORT = 3005;
server.listen(PING_LISTEN_PORT, () => {
  console.log(`Serv en écoute sur le PORT ${PING_LISTEN_PORT}`);
});
//
