import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Planets } from './planets';

$(document).ready(function(){

  $("#ageButton").click(function(event){
    event.preventDefault();

    const age = $("#age").val();
    const newPlanet = new Planets(age);

    $("#ageOutput").text(age);
    $("#ageOutput").append(`<br> Mercury Age: ${newPlanet.mercuryAge(), newPlanet.age}`);
    $("#ageOutput").append(`<br> Venus Age: ${newPlanet.age = age, newPlanet.venusAge(), newPlanet.age}`);
    $("#ageOutput").append(`<br> Mars Age: ${newPlanet.age = age, newPlanet.marsAge(), newPlanet.age}`);
    $("#ageOutput").append(`<br> Jupiter Age: ${newPlanet.age = age, newPlanet.jupiterAge(), newPlanet.age}`);



  });

});

