let inputHere = document.getElementById("inputHere");
const searchHere = document.getElementById("searchHere");


searchHere.addEventListener('click', function() {
    fetch('https://api.lyrics.ovh/suggest/'+inputHere.value)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 10; i++) {
            let element = data.data[i];
            const title = element['title'];
            let songTitle = document.getElementById("songTitle");
            songTitle.innerHTML = title;
            const artist = element['artist']['name'];
            let artistName = document.getElementById("artistName");
            artistName.innerText = artist;            
         }
        
    })
    
});
// https: //api.lyrics.ovh/v1/Calvin%20Harris/summer