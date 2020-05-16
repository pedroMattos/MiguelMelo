/*!
 * @author Vinicius de Santana
 * @description servidor node
 */
const express = require('express');
const bodyParser = require('body-parser');

/*! API V1*/
const apiv1 = express();

// parse urlencoded to object
apiv1.use( bodyParser.urlencoded( { extended: true }));
// parse json to object
apiv1.use( bodyParser.json() );

// instanciando as rotas
const routeClientsv1 = require('./routes/clients');
// aplicando as rotas
var apiv1URL = "/api/v1/"
apiv1.use( '/', express.static('./www'));//rotas staticas
apiv1.use(apiv1URL + 'clients', routeClientsv1);
/*! END API V1*/

apiv1.listen(8081,()=>{
    console.log('Iniciado.');
});
// exports.apiv1 = functions.https.onRequest(apiv1);