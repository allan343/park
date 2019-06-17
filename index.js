var dogCount = 0;
var upperLimit;
'use strict';



function getDogImages(state) {
    console.log(state);
  let url = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=yeHtfqZJhF9Psd38TVoz9KZuvnhXwBXAOqoppoeT`;
  
    console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error =>{

      console.log(error.message);
      alert('Something went wrong. Try again later.');
    } 
    )
    
}

function displayResults(responseJson) {
  var upper;
  console.log(responseJson);
 // console.log(responseJson[1]);
  console.log(responseJson.data.length);
  console.log(responseJson.data[1].description);
  console.log(upperLimit);
 
if(responseJson.data.length<upperLimit)
{
  upper = responseJson.data.length;
}
else{
  upper = upperLimit;
}
console.log(upper);
  $('.results-img').html("");
  let link="";
  //replace the existing image with the new one
for(let i =0; i< upper;i++)
  {
   // link += `<img src="${responseJson.message[i]}" class="results-img">`;
 // link +=`<p>${responseJson.data[i].description}</p>`;
  //display the results section
  $('.results-img').append(
    //`<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].full_name}</a></h3>`
     `<li><h3><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h3><p>${responseJson.data[i].description}</p></li>`
    //`<p>${response.data[i].description}</p>`
    );





  
  }
  /*
  $('.results-img').html(
    link
   );*/
  $('.results').removeClass('hidden');
}

function watchForm() {
    var state;
 
  $('form').submit(event => {
    state=$('.dog-number').val();
    upperLimit = $('.upper-limit').val();
    event.preventDefault();
   console.log(upperLimit);
    getDogImages(state);
   
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  $(".dog-number").attr("value", 3);
  watchForm();
});