// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// const $ = require('jquery');

console.log('starting up!');

// $('#main').html("You've been on this page for ${num} seconds.");
let num = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}, 1000);
