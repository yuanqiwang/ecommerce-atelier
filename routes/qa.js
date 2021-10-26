let {token} = require('../config.js');

var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:productId', (req, res) => {
  let productId = req.params.productId;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}`, {
    headers: {
      'Authorization': `${token}`
    }
  })
    .then(({data})=> res.json(data))
    .catch(()=> res.sendStatus(404))
})

module.exports = router;

