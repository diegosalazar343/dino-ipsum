import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './dino-service.js';

$(document).ready(function () {
  console.log("TEST");
  $("#submit").submit(function(event) {
    event.preventDefault();
    console.log("Got into the submit function");
    let promise = DinoService.dinoIpsum();
    promise.then(function(response) {
      console.log("Ran the promise function");
      const body = JSON.parse(response);
      for (let i = 0; i < 15; i++) {
        console.log("Going through loop num " + i);
        $("#response").append(`<li>${body[0][i]}</li>`);
      }
    }), function(error) {
      console.log("reached error");
      $('#response').append(`<li>${error}. There was a problem submitting your request.</li>`);
    };
  });
});
