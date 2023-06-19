// En esta importacion lo que hacemos es desestructurar el metodo que nos interesa
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } =require('../middlewares/validar-campos');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth'); 
const { validarJWT } = require('../middlewares/validar-jwt');

// Este metodo de tipo get, su callback, este se dispara con varios argumentos uno de ellos es reques y el otro response
// router.get( '/', ( req, res ) => {
//     res.json({
//         ok: true
//     });
// });

// AQUI HAY TRES ENDPOINTS ESTABLECIDOS, 2 CON METODO POST Y UNO CON METODO GET
router.post( 
    '/new',
     [// Middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
     ] ,
     crearUsuario );

router.post( 
    '/',
    [ // Middleware
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get( '/renew', validarJWT , revalidarToken);



// Ahora que la ruta esta establecida tenemos que exportarlo para que cuando se utilice el middleware
module.exports = router; 