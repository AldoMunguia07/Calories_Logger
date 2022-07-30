const express = require('express');
const router = express.Router();
const Usuario = require('../../../../libs/usuarios');
const UsuarioDao = require('../../../../dao/mongodb/models/UsuarioDao');
const userDao = new UsuarioDao();
const user = new Usuario(userDao);
user.init();
const {jwtSign} = require('../../../../libs/security');

router.get('/listar', async (req, res) => {
  try {
    const usuarios = await user.obtenerUsuarios()
    return res.status(200).json(usuarios);
  } catch (ex) {
    console.error(ex);
    return res.status(501).json({ error: 'Error al procesar solicitud.' });
  }
});

router.post('/login', async (req, res)=>{
  try {
    const {email, password} = req.body;

    const usuario = await user.obtenerPorCorreo({email});
    if(usuario)
    {
      if(! user.compararContrasenia(password, usuario.password) ) {
        console.error('security login: ', {error:`Credenciales incorrectas.`});
        return res.status(403).json({ "error": "Credenciales no Válidas" });
      }

      const {password: passwordDb, created, ...jwtUser} = usuario;

      const jwtToken = await jwtSign({jwtUser, generated: new Date().getTime()});



      return res.status(200).json({token: jwtToken});
    }

    return res.status(403).json({ "error": "Credenciales no Válidas" });
  } catch (ex) {
    console.error('security login: ', {ex});
    return res.status(500).json({"error":"No es posible procesar la solicitud."});
  }
});


router.post('/registrarse', async (req, res) => {
  try {
    const {
      email = '',
      password = '',
      nombre = '',
      ocupacion = '',
      estado = ''
      } = req.body;

    if (/^\s*$/.test(email)) {
      return res.status(400).json({
        error: 'Se espera valor de correo'
      });
    }
    if (/^\s*$/.test(password)) {
        return res.status(400).json({
          error: 'Se espera valor de contraseña'
        });
      }
    if (/^\s*$/.test(nombre)) {
      return res.status(400).json({
        error: 'Se espera valor de nombre'
      });
    }
    if (/^\s*$/.test(ocupacion)) {
      return res.status(400).json({
        error: 'Se espera un valor de ocupación'
      });
    }
    if (!(/^(ACT)|(INA)$/.test(estado))) {
      return res.status(400).json({
        error: 'Se espera valor de estado en ACT o INA'
      });
    }

    const usuarioDatos = await user.obtenerPorCorreo({email});
    console.log(usuarioDatos);
    if(usuarioDatos)
    {
      return res.status(403).json({ "error": "Este correo ya está en uso" });
    }


    const usuario = await user.agregarUsuario({
      email,
      password,
      nombre,
      ocupacion,
      estado
    });
    return res.status(200).json(usuario);
  } catch (ex) {
    console.error(ex);
    return res.status(502).json({ error: 'Error al procesar solicitud' });
  }
});

module.exports = router;
