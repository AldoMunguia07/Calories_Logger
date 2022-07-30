const express = require('express');
const router = express.Router();
const Calorias = require('../../../../libs/calorias');
const CaloriasDao = require('../../../../dao/mongodb/models/CaloriasDao');
const cal = new Calorias(new CaloriasDao());
cal.init();
router.get('/listartodos', async (req, res) => {
  try {
    
    const resultado = await cal.obtenerCalorias(req.user.jwtUser._id);
    return res.status(200).json(resultado);
  } catch (error) {
    console.error('Calorias', error);
    return res.status(500).json({ 'error': 'No se puede procesar petición.' });
  }
});

router.post('/agregar', async (req, res) => {
  try {
    const {calorias = 0, tipoEjercicio = '', descripcion = '' } = req.body;

    if (!(/^(\d+)|([\da-f]{24})$/.test(calorias))) {
      return res.status(400).json({error:'El codigo debe ser un dígito válido.'});
    }

    if (/^\s*$/.test(tipoEjercicio)) {
      return res.status(400).json({
        error: 'Se espera valor de el tipo de ejercicio'
      });
    }


    if (/^\s*$/.test(descripcion)) {
      return res.status(400).json({
        error: 'Se espera valor de la descripción del tipo de ejercicio'
      });
    }
    
  
    const resultado = await cal.nuevaCaloria({
      userId: req.user.jwtUser._id,
      calorias: parseFloat(calorias), 
      tipoEjercicio, 
      descripcion 
    });
    return res.status(200).json(resultado);
  } catch (error) {
    console.error('caloria', error);
    return res.status(500).json({ 'error': 'No se puede procesar petición.' });
  }
});


router.get('/resumen', async (req, res) => {
  try {
    const summary = await cal.obtenerPorTipoEjercicio(req.user.jwtUser._id);
   
   
    return res.status(200).json(summary);
  } catch (error) {
    console.error('cashflow', error);
    return res.status(500).json({ 'error': 'No se puede procesar petición.' });
  }
});

router.get('/page/:page/:limit', async (req, res) => {
  try {
    const { page, limit } = req.params;
    const _page = parseInt(page);
    const _limit = parseInt(limit);
    const result = await cal.obtenerPorPaginacion(req.user.jwtUser._id, _page, _limit);
    return res.status(200).json(result);
  } catch (error) {
    console.error('caloria', error);
    return res.status(500).json({ 'error': 'No se puede procesar petición.' });
  }
});

module.exports = router;