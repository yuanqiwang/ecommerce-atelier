const express = require('express');
var compression = require('compression');
let app = express();
let PORT = 1234;

const config = require('./config.js'); // Name: github_token
const axios = require('axios');

let qa = require('./routes/qa')

app.use(compression());
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/product/info/*', async (req, res) => {
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
  const reviewRequest = axios(optionsReview);

  const optionsStars = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
    headers: { Authorization: config.github_token }
  }

  const starsRequest = axios(optionsStars)

  const optionsStyle = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
    headers: { Authorization: config.github_token }
  }

  const styleRequest = axios(optionsStyle)


  const optionsProduct = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
    headers: { Authorization: config.github_token }
  }

  const productRequest = axios(optionsProduct)

  const optionsQuestions= {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=10000`,
    headers: { Authorization: config.github_token }
  }
  const questionsRequest = axios(optionsQuestions);


  try {
    let relatedProduct = await relatedProductRequest;
    let review = await reviewRequest;
    let reviewStars = await starsRequest;
    let style = await styleRequest;
    let prod = await productRequest;
    let questions = await questionsRequest;


    res.send({
      related: relatedProduct.data,
      review: review.data,
      questions: questions.data.results,
      reviewStars: reviewStars.data,
      style : style.data,
      prod : prod.data
    })
  } catch(err){
    res.send(err);
  }


})

app.post('/qa/questions', (req, res) => {
  console.log(req.body);
  const optionPostQuestion = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: { Authorization: config.github_token },
    data: req.body
  };

  axios(optionPostQuestion)
    .then((result) => {
      console.log('success')
      res.send(201)})
    .catch((error) => {
      console.log(error)
      res.send(error)})

})

app.post('/review/reviews', (req, res) => {



  const optionPostReview = {
    method: 'Post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: { Authorization: config.github_token },
    data: req.body
  };

  axios(optionPostReview)
    .then((res) => {
      console.log('review post success')
    })
    .catch((err) => {
      console.log(err)
    })

})



app.get('/related/*', async (req, res) => {
  const productId = req.params['0']; // string not number

  const optionsStars = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
    headers: { Authorization: config.github_token }
  }

  const starsRequest = axios(optionsStars)

  const optionsStyle = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
    headers: { Authorization: config.github_token }
  }

  const styleRequest = axios(optionsStyle)


  const optionsProduct = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
    headers: { Authorization: config.github_token }
  }

  const productRequest = axios(optionsProduct)


  try {
    let reviewStars = await starsRequest;
    let style = await styleRequest;
    let prod = await productRequest;


    res.send({
      reviewStars: reviewStars.data,
      style : style.data,
      prod : prod.data
    })
  } catch(err){
    res.send(err);
  }


})

app.post('/qa/questions', (req, res) => {

  const optionPostQuestion = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: { Authorization: config.github_token },
    data: req.body
  };

  axios(optionPostQuestion)
    .then((result) => {
      res.sendStatus(201)})
    .catch((error) => {
      res.send(error)})

})

app.get('/qa/questions/:id', async (req, res) => {
  const productId = req.params.id;
  const optionsQuestions= {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${productId}&count=10000`,
    headers: { Authorization: config.github_token }
  }
  const questionsRequest = axios(optionsQuestions);

  try {
    let questions = await questionsRequest;
    console.log('questions.data.results',questions.data.results)
    res.send( questions.data.results )
  } catch(err){
    res.send(err);
  }
})

app.post('/qa/questions/:id/answers', (req, res) => {
  let questionId = req.params.id;
  const optionPostAnswer = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`,
    headers: { Authorization: config.github_token },
    data: req.body
  };

  axios(optionPostAnswer)
    .then((result) => {
      res.sendStatus(201)})
    .catch((error) => {
      console.log(error)
      res.send(error)})
})

app.get('/qa/questions/:id/answers', (req, res) => {
  let questionId = req.params.id;
  console.log(questionId)
  const optionGetAnswer = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers?&count=1000`,
    headers: { Authorization: config.github_token }
  };

  axios(optionGetAnswer)
    .then((result) => {
      res.send(result.data.results)})
    .catch((error) => {
      console.log(error)
      res.send(error)})
})


app.put('/qa/questions/helpful', (req, res) => {
  let questionId = req.body.id
  const optionQuestionHelpful= {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`,
    headers: { Authorization: config.github_token }
  };
  axios(optionQuestionHelpful)
    .then((result) => {
      res.sendStatus(204)
    })
    .catch((error) => {
      res.send(error)}
    )
})

app.put('/qa/answers/helpful', (req, res) => {
  let answersId = req.body.id
  const optionAnswerHelpful= {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answersId}/helpful`,
    headers: { Authorization: config.github_token }
  };
  axios(optionAnswerHelpful)
    .then((result) => {
      res.sendStatus(204)
    })
    .catch((error) => {
      res.send(error)}
    )
})

app.put('/qa/answers/report', (req, res) => {
  let id = req.body.id;
  const optionAnswerReport = {
    method: 'PUT',
    url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${id}/report`,
    headers: { Authorization: config.github_token }
  };
  axios(optionAnswerReport)
    .then(result => res.sendStatus(204))
    .catch(error => res.send(error))
})

app.post('/interactions', (req, res) => {
  const optionInteractions = {
    method: 'POST',
    url:`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions`,
    headers: { Authorization: config.github_token },
    data: req.body
  };
  axios(optionInteractions)
    .then(result => {res.sendStatus(201)})
    .catch(error => {res.send(error)})
})
app.listen(PORT, () => console.log(`Listen on port ${PORT}`))