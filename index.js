 const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const matk1 = {
  title: 'RMK Taevaskoja matkarada',
  description: 'Algus Saesaare parklast',
  startsAt: '7.juuni, 11:00',
  endsAt: '7.juuni, 14:00',
  locationDescription: 'Saesaare parkla',
  locationLatitude: '58.11520',
  locationLongitude: '27.04692',
  price: '0€',
  imageUrl: 'https://static.visitestonia.com/images/2924300/100…_false_false_14df96813a0fc58588c7fa39b187f0d5.jpg',
};

const matk2 = {
  title: 'Verijärve matkarada',
  description: 'Kogunemine Verijärve matkaraja parklas',
  startsAt: '10.juuli, 11:00',
  endsAt: '7.juuni, 19:00',
  locationDescription: 'Verijärve matkaraja parkla',
  locationLatitude: '57.81133',
  locationLongitude: '27.05531',
  price: '25€',
  imageUrl: 'https://static.visitestonia.com/images/3490610/100…_false_false_bf438c714f92e0ae9af07dc8115a54d9.jpg',
};

const matk3 = {
  title: 'Pühajärve matkarada',
  description: 'Alustame Otepää Looduspargi keskuse juurest',
  startsAt: '10.juuli, 11:00',
  endsAt: '7.juuni, 19:00',
  locationDescription: 'Otepää Looduspargi keskus',
  locationLatitude: '58.04387',
  locationLongitude: '26.47748',
  price: '35€',
  imageUrl: 'https://static.visitestonia.com/images/3600413/100…_false_false_080676701c60fd37d5387744986ca71d.jpg',
};

const matkad = [matk1, matk2, matk3];

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/treks', (req, res) => res.render('pages/treks', { matkad: matkad }))
  .get('/news', (req, res) => res.render('pages/news'))
  .get('/contact', (req, res) => res.render('pages/contact'))  
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

