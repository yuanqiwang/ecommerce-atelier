const express = require('express');
let app = express();
let PORT = 1234;

const config = require('./config.js'); // Name: github_token
const axios = require('axios');

let qa = require('./routes/qa')

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/product/info/*', async (req, res) => {
  // console.log(req.params);
  // {'0': '60221'}
  const productId = req.params['0']; // string not number

  const optionsRelatedproduct = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
    headers: { Authorization: config.github_token }
  }

  const relatedProductRequest = axios(optionsRelatedproduct);

  const optionsReview = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=100`,
    headers: { Authorization: config.github_token }
  }
  const reviwRequest = axios(optionsReview);

  const optionsQuestions= {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=10000`,
    headers: { Authorization: config.github_token }
  }
  const questionsRequest = axios(optionsQuestions);


  try {
    let relatedProduct = await relatedProductRequest;
    let review = await reviwRequest;
    let questions = await questionsRequest;

    res.send({
      related: relatedProduct.data,
      review: review.data,
      questions: questions.data.results
    })
  } catch(err){
    res.send(err);
  }


})



app.listen(PORT, () => console.log(`Listen on port ${PORT}`))