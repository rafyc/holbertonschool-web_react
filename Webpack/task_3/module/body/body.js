import './body.css';
import $ from 'jquery';
import _ from "lodash";

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="btn" type="button">Click here to get started</button>')
$('body').append('<p id="count"></p>')

let count = 0

function updateCounter() {
  count += 1
  $('#count').text(`${count} clicks on the button`)
  console.log(count);
}

$('#btn').on('click', _.debounce(updateCounter, 500));
