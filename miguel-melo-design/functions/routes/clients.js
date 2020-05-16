const express = require('express');
const router = express.Router();
const route = "/clients/";

//rotas

/**
 * @description cria novo usuário no banco
 * verifica se foi recebido dados suficientes
 * procura se já existe usuário no banco
 * lança novo usuário no banco e retorna esse usuário (sem a senha).
 */
router.post('/', (req, res)=>{
    console.log("APP: POST to: clients. body: " + req.body); //logs
    const obj = req.body;
    var response = {
        cod: null,
        msg: null
    };
    // aqui verifico os dados obrigatórios
    if (!obj.name || !obj.from || !obj.phone){
        response.cod = 400;
        response.msg = "Dados incorretos ou faltantes";
        response.data = obj;
        return res.status(response.cod).send(response);
    }

    var sendEmail = require('../model/email');
    sendEmail(obj);
    
    //reposta a solicitação
    response.cod = 201;
    response.msg = "Usuário criado";
    response.data = obj;
    return res.status(response.cod).send(response);
});

router.get('/', function (req, res) {
    res.send('Hello World!');
});

//fim rotas
module.exports = router;