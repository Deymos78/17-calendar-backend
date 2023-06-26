// EN ESTOS CONTROLADORES SON SOLO LAS FUNCIONES QUE TENEMOS DEFINIDAS EN LOS ENDPOINTS
// Podemos perder la intelligence que es lo que nos suele ayudar en el tema de completar codigo
const express = require('express');
// const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

// El request es lo que la persona solicita, por lo que si se envian datos junto con la solicitud entonces ahi los veremos o ahi 
// estaran en caso de que los necesitemos
// En la response es la respuesta    
const crearUsuario = async( req, res = express.response ) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });

        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }

        usuario = new Usuario( req.body );

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con alguien de sistemas o con el administrador '
        })
        
    }

    
 
    // if( name.length < 5 ){
    //     // Las respuestas o "res" solo se pueden hacer una vez
    //     return res.status(400).json({
    //         ok: false,
    //         msg: 'El usuario debe de ser de 5 letras'
    //     })
    // }

    // MANEJO DE ERRORES 
    // const errors = validationResult( req );
    // // console.log( errors );
    // if( !errors.isEmpty() ){    
    //     return res.status(400).json({
    //         ok: false,
    //         errors: errors.mapped()
    //     })
    // }

    
}


const loginUsuario = async( req, res = express.response) => {


    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });

        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password Incorrecto'
            })
        }

        // Generar nuestro JWT(JSon Web Token) 
        const token = await generarJWT( usuario.id, usuario.name );


        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con alguien de sistemas o con el administrador '
        })   
    }
}

const revalidarToken = async( req, res = express.response ) => {

    const { uid, name } = req;

    // Generar un nuevo Token
    const token = await generarJWT( uid, name );    

    res.json({
        ok: true,
        uid, name,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,

}