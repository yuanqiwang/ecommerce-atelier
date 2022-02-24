# Project Atelier

#### Demo
<img src="atelier.gif" />

## Overview

An e-commerce website that allows users to browse products and their descriptions, read and submit Q&A and reviews, and much more. It has four main sections:
- Product Overview: includes product information, style selector, cart and image gallery.
- Related Product: includes related products and liked products presented in two carousels.
- Questions and Answers: includes questions and answers, feedback buttons, forms to submit questions and answers, and search bar for searching questions.
- Reviews: includes reviews and ratings, a form to submit a review, and search bar for searching reviews.

This is part of the HackReacter Capstone Projects. 

## Description (Q&A)

This description is for the Q&A section. For detailed description of other sections, please check out the repo from each contributor. Based on the Business Requirement, the Q&A section achieves the following key functions:

- It displays a list of questions and their answers related to the product in question. 
- Questions and answers are sorted by their helpfulness. If the answer is by the seller, that answer will be displayed first. 
- The user can vote a question or an answer to be "helpful" by clicking the "helpful?" link. Similarly, a user can report a question or an answer. A user can vote only once per browser (until the user clears out the browser cache).
- The user can expand the number of questions shown in the list two at a time (scrollable after certain height). The user can also collapse the list.
- The user can submit a new question and upload an image via a modal
- The user can submit an answer via a modal
- The use can search questions by keyword. The search results will be populated. Searched word is highlighted in yellow. 


Users can search questions and the list of questions will be filtered to 

## Setup/Installation

- Clone this repo to your desktop
- Use command `npm install` to install all necessary packages
- Use command `npm run start` to start the server
- Use command `npm run build` to compile code
- Open `index.html` in your browser

## Technologies

- React
- Node
- Express
- CSS
- JavaScript

## Deployment

The front-end was deployed using AWS EC2 container (Ubuntu server)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## Credit

- Overview: [Adam Lohnes](https://github.com/adam-lohnes)
- Header & Related Product: [Yitong Liu](https://github.com/lyt414)
- Questions & Answers: [Yuanqi Wang](https://github.com/yuanqiwang)
- Reviews: [Maggie Saldivia](https://github.com/Maggie-Mango)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
