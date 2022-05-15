 const express = require('express');
const { get } = require('express/lib/response');
const res = require('express/lib/response');
const path = require('path');
const PORT = process.env.PORT || 5000;

const matk1 = {
  id: 0,
  title: 'RMK Taevaskoja matkarada',
  description: 'Algus Saesaare parklast',
  startsAt: '7.juuni, 11:00',
  endsAt: '7.juuni, 14:00',
  locationDescription: 'Saesaare parkla',
  locationLatitude: '58.11520',
  locationLongitude: '27.04692',
  price: '0€',
  imageUrl: 'https://www.reisijutud.com/sites/default/files/images/taevaskoja-emalate.jpg',
  participants: [],
};

const matk2 = {
  id: 1,
  title: 'Verijärve matkarada',
  description: 'Kogunemine Verijärve matkaraja parklas',
  startsAt: '10.juuli, 11:00',
  endsAt: '7.juuni, 19:00',
  locationDescription: 'Verijärve matkaraja parkla',
  locationLatitude: '57.81133',
  locationLongitude: '27.05531',
  price: '25€',
  imageUrl: 'https://media.voog.com/0000/0030/9870/photos/verij2rve_matkarada_1_large_large.jpg',
  participants: []
};

const matk3 = {
  id: 2,
  title: 'Pühajärve matkarada',
  description: 'Alustame Otepää Looduspargi keskuse juurest',
  startsAt: '10.juuli, 11:00',
  endsAt: '7.juuni, 19:00',
  locationDescription: 'Otepää Looduspargi keskus',
  locationLatitude: '58.04387',
  locationLongitude: '26.47748',
  price: '35€',
  imageUrl: 'https://static.visitestonia.com/images/3762350/600_400_false_false_c993158816604cc88ee56384d51c40bc.jpg',
  participants: []
};

const matkad = [matk1, matk2, matk3];

const naitaMatkaVaadet = (req, res) => {
  const matk = matkad.find((matk) => matk.id === parseInt(req.params.matkaId))
  return res.render('pages/trek', { matk })
}

const registreeriOsaleja = (req,res) => {
  const paringuKeha = req.body;
  console.log(osaleja);
  const matk = matkad.find((matk) => matk.id === parseInt(paringuKeha.matkaId));
  matk.participants.push(paringuKeha.osaleja);
  res.json({ response: 'Töötab!' });
}

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))  
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/treks', (req, res) => res.render('pages/treks', { matkad: matkad }))
  .get('/treks/:matkaId', naitaMatkaVaadet)
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/news', (req, res) => res.render('pages/news'))
  .post('/api/register', registreeriOsaleja)
  .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

