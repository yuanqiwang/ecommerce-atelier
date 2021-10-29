let {github_token} = require('../config.js');

var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:productId', (req, res) => {
  let productId = req.params.productId;
  let page = 1;

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=10000`, {
    headers: {
      'Authorization': `${github_token}`
    }
  })
    .then(({data}) => {
      let questions = data.results;
      questions.sort((a, b) => {return b['question_helpfulness'] - a['question_helpfulness']})
      res.json(questions)

    })
    .catch(()=> res.sendStatus(404))
})

module.exports = router;

