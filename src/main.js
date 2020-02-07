import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Planets } from './planets';

$(document).ready(function(){

  $("#ageButton").click(function(event){
    event.preventDefault();

    const age = $("#age").val();
    const lifeExp = 73;
    const newPlanet = new Planets(age);

    $("#ageOutput").append(`<div>${age}<br>Avg life Exp:${newPlanet.lifeExp}<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd1jqu7g1y74ds1.cloudfront.net%2Fwp-content%2Fuploads%2F2010%2F05%2FEarth-Western-Hemisphere.jpg&f=1&nofb=1" alt="earth"></img></div>`);
    $("#ageOutput").append(`<br> <div>Mercury Age: ${newPlanet.mercuryAge(), newPlanet.age}<br>Avg life Exp:${newPlanet.lifeExp}<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3c1703fe8d.site.internapcdn.net%2Fnewman%2Fgfx%2Fnews%2Fhires%2F2016%2F51-researchersf.jpg&f=1&nofb=1" alt="mercury"></div>`);
    $("#ageOutput").append(`<br> <div>Venus Age: ${newPlanet.age = age, newPlanet.venusAge(), newPlanet.age}<br>Avg life Exp:${newPlanet.lifeExp = lifeExp, newPlanet.venusAge(), newPlanet.lifeExp}<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthusspokejon.files.wordpress.com%2F2014%2F04%2Fvenus.jpg&f=1&nofb=1" alt=""></div>`);
    $("#ageOutput").append(`<br> <div>Mars Age: ${newPlanet.age = age, newPlanet.marsAge(), newPlanet.age}<br>Avg life Exp:${newPlanet.lifeExp = lifeExp, newPlanet.marsAge(), newPlanet.lifeExp}<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2014%2F12%2F17%2Fscience%2F17mars-span%2F17mars-1418766578033-master1050.jpg&f=1&nofb=1" alt=""></div>`);
    $("#ageOutput").append(`<br> <div>Jupiter Age: ${newPlanet.age = age, newPlanet.jupiterAge(), newPlanet.age}<br>Avg life Exp:${newPlanet.lifeExp = lifeExp, newPlanet.jupiterAge(), newPlanet.lifeExp}<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-JzB2ruOjBOs%2FWJy8tR_tJSI%2FAAAAAAAABdA%2F26gANOQ4Y4IZyMnEGS2L8X-dvhVhGL0ZQCLcB%2Fs1600%2Fjupiter_HD.jpg&f=1&nofb=1" alt=""></div>`);



  });

});

