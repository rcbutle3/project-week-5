/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let mainbutton = document.getElementById('mainbuttonButton');
let url = 'https://itunes.apple.com/search?';


// 2. Create your `submit` event for getting the user's search term
submit.addEventListener('click', function() {
 let search = document.getElementById('search').value;
 let search url = url + search;

// 3. Create your `fetch` request that is called after a submission
fetch(searchURL)
   .then(
     function(response) {
       if (response.status !== 200) {
         console.log('Something no bueno ' + response.status);
         return;

       } console.log(searchURL);

// 4. Create a way to append the fetch results to your page

response.json().then(function(data) {
      let searchResults = document.getElementById('search_results');
        searchResults.innerHTML = "";
      for (let i = 0; i < data.results.length; i ++) {
         let track = data.results[i].trackName;
         let artist = data.results[i].artistName;
         let image = data.results[i].artworkUrl100;
         let preview = data.results[i].previewUrl;
         let results =
         `
         <img src="${thumnail}">
         <p> class="${track}">${track}</p>
         <p> class="${artist}">${artist}</p>
         `
// 5. Create a way to listen for a click that will play the song in the audio play
