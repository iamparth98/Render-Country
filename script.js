// 'use strict';

// const { resolveObjectURL } = require('buffer');
// const { Resolver } = require('dns');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
      <p class="country__row"><span>💰</span>${Object.values(data)}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const countryAPI = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [_, data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//     <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// countryAPI('india');
// countryAPI('');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data.borders;
//       console.log(data.borders);
//       return fetch(`https://restcountries.com/v3/name/${neighbour}`);
//     })
//     .then(response => {
//       response.json();
//     })
//     .then(data => renderCountry(data, neighbour));
// };
// getCountryData('usa');

// const getCountryData = function(){}
// fetch(`https://restcountries.com/v3/name/india`).then(response => {
//   response.json().then(data => {
//     console.log(data);
//     renderCountry(data[0]);

//     const neighbour
//   });
// });
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/52.505495,13.392547?geoit=json&auth=776933478307464037712x72293`
//   )
//     .then(response => console.log(response.json()))
//     .then(data => console.log(data));
// };

// const timer = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) resolve('you win');
//   else reject(new Error('sucks to be you i guess'));
// });

//promisifying settimeout

// setTimeout();

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) resolve();
//   else reject(new Error('you lost'));
// })
//   .then(() => {
//     console.log('message');
//   })
//   .catch(error => console.log(error));

// // lotteryPromise();

// const wait = new Promise(function (resolve, reject) {
//   setTimeout(() => {}, 2000);
// });

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3/name/${country}`)
    .then(res => {
      const data = res.json();
      return data;
    })
    .then(data => {
      console.dir(Object.values(data[0]));

      renderCountry(data[0]);
    })
    .catch(err => console.error(err));
};
getCountryData('usa');
