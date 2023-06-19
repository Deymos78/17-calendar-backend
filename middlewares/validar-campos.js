const express = require('express');
const { validationResult } = require('express-validator');

// El next es la funcion a la que hay que llamar si todo el middleware se ejecuta correctamente
const validarCampos = ( req, res = express.response, next ) => {

    const errors = validationResult( req );

    if( !errors.isEmpty() ){
        return res.json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}


module.exports = {
    validarCampos,
}