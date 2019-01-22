    const RespostasNumeroId = require('./../models/respostasModel');


    //  let Respostas = new RespostasNumeroId(
    // {
    //     respostas:
    //         [
    //     {
    //         resposta: "int"
    //     },
    //     {
    //         resposta: "integer"
    //     },
    //     {
    //         resposta: "var"
    //     },
    //     {
    //         resposta: ";"
    //     },
    //     {
    //         resposta: "1variavel"
    //     },
    //     {
    //         resposta: "numero"
    //     },
    //     {
    //         resposta: ":"
    //     },
    //     {
    //         resposta: "double"
    //     }
    // ],
    //     numeroId: 1}
    // );
    //
    // Respostas.save(function (err) {
    //     if (err) throw err;
    //     console.log('Dados salvos com sucesso!');
    // });


    module.exports = function(app) {
        //Buscar respostas do bd e responder por aqui em formato json
        app.get('/respostasid/:numeroId', function (req, res) {

            RespostasNumeroId.find(
                {numeroId: req.params.numeroId},
                function (err, collection) {
                    if (err)
                        return console.error(err);
                    else
                        console.log("Foi recuperado o reposta com numeroId: "+req.params.numeroId);
                    res.json(collection);
                });
        });
    };